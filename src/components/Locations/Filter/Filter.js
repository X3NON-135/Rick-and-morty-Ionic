import React, { useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';

const Filter = filters => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const loadFilters = async () => {
      const storedName = await Preferences.get({ key: 'filterName' });
      const storedType = await Preferences.get({ key: 'filterType' });
      const storedDimension = await Preferences.get({ key: 'filterDimension' });

      if (storedName.value) filters.setName(storedName.value);
      if (storedType.value) filters.setType(storedType.value);
      if (storedDimension.value) filters.setDimension(storedDimension.value);
    };
    loadFilters();
  }, []);

  const itemClickHandler = e => {
    filters.setName(e.target.textContent);
    setIsOpen(!isOpen);
    Preferences.set({ key: 'filterName', value: e.target.textContent });
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  const handleClick = () => {
    filters.setName("");
    filters.setType("");
    filters.setDimension("");
    Preferences.remove({ key: 'filterName' });
    Preferences.remove({ key: 'filterType' });
    Preferences.remove({ key: 'filterDimension' });
  };

  const handleSelectChange = e => {
    const { name, value } = e.target;
    if (name === "Type") {
      filters.setType(value);
      Preferences.set({ key: 'filterType', value });
    }
    if (name === "Dimension") {
      filters.setDimension(value);
      Preferences.set({ key: 'filterDimension', value });
    }
  };

  return (
    <div className="container__filters">
      <input
        value={filters.name}
        type="text"
        placeholder="Search by the name"
        className="filters__input"
        onChange={e => {
          filters.setName(e.target.value);
          Preferences.set({ key: 'filterName', value: e.target.value });
        }}
        onClick={inputClickHandler}
      />
      <ul className="filters__dropdown">
        {filters.name && isOpen ? filters.locations.map((item, key) => (
          <li key={key} className="dropdown__item" onClick={itemClickHandler}>
            {item.name}
          </li>
        )) : null}
      </ul>

      <div className="selects">
        <select name="Type" className="filters__select" onChange={handleSelectChange}>
          <option selected disabled value="All" className="select__option">Type</option>
          {filters.type.map((item, key) => (
            <option key={key} value={item} className="select__option">{item}</option>
          ))}
        </select>

        <select name="Dimension" className="filters__select" onChange={handleSelectChange}>
          <option selected disabled value="All" className="select__option">Dimension</option>
          {filters.dimension.map((item, key) => (
            <option key={key} value={item} className="select__option">{item}</option>
          ))}
        </select>
      </div>

      <button className="filters__button" onClick={handleClick}>
        Show All
      </button>
    </div>
  );
};

export default Filter;
