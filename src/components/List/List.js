import React, { useState, useEffect } from 'react';
import Todo from './Todo/Todo';
import { Preferences } from '@capacitor/preferences';
import { CapacitorHttp } from '@capacitor/core';
import "./List.css";

const List = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState("");

  // Fetch episodes on name change
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await CapacitorHttp.get({
          url: `https://rickandmortyapi.com/api/episode/?name=${name}`,
        });
        setEpisodes(response.data.results);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };
    
    if (name) {
      fetchEpisodes();
    } else {
      setEpisodes([]);
    }
  }, [name]);

  // Get stored todo list from Capacitor Storage (Preferences)
  useEffect(() => {
    const loadTodoList = async () => {
      const storedList = await Preferences.get({ key: 'todoList' });
      if (storedList.value) {
        setTodoList(JSON.parse(storedList.value));
      }
    };
    loadTodoList();
  }, []);

  const itemClickHandler = e => {
    setName(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  const addTodo = () => {
    const newTodoList = [...todoList, { _id: todoList.length, name, isChecked: false }];
    setTodoList(newTodoList);
    Preferences.set({ key: 'todoList', value: JSON.stringify(newTodoList) });
    setName("");
  };

  const toggleCheckedTodo = idx => {
    const newArray = [...todoList];
    newArray[idx].isChecked = !newArray[idx].isChecked;
    setTodoList(newArray);
    Preferences.set({ key: 'todoList', value: JSON.stringify(newArray) });
  };

  const deleteTodo = idx => {
    const newArray = [...todoList];
    newArray.splice(idx, 1);
    setTodoList(newArray);
    Preferences.set({ key: 'todoList', value: JSON.stringify(newArray) });
  };

  const sortedTodo = todoList.sort((a, b) => b.isChecked - a.isChecked);

  return (
    <section className="watchList" id="watchList">
      <div className="watchList__container container">
        <h1 className="container__title">my watch list</h1>
        <h3 className="container__noTodo">{sortedTodo[0] === undefined ? "Add episodes you want to watch later" : ""}</h3>

        <div className="col">
          <div className="row">
            <input
              type="text"
              value={name}
              placeholder="Search for episodes..."
              className="container__input"
              onChange={e => setName(e.target.value)}
              onClick={inputClickHandler}
            />
            <button className="container__button" onClick={addTodo}>+</button>
          </div>

          <ul className="container__dropdown">
            {episodes && name && isOpen ? episodes.map((item, key) => (
              <li className="dropdown__item" key={key} onClick={itemClickHandler}>
                {item.name}
              </li>
            )) : null}
          </ul>
        </div>

        <div className="container__todo">
          {sortedTodo ? sortedTodo.map((item, idx) => (
            <Todo
              key={`_todo_${idx}`}
              name={item.name}
              isChecked={item.isChecked}
              toggleCheckedTodo={toggleCheckedTodo}
              deleteTodo={deleteTodo}
              idx={idx}
            />
          )) : null}
        </div>
      </div>
    </section>
  );
};

export default List;
