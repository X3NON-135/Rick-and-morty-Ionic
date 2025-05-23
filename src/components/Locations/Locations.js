import React, { useEffect, useState } from 'react';
import { CapacitorHttp } from '@capacitor/core';

// import component styles
import "./Locations.css";

// Ionic imports
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonPagination } from '@ionic/react';

// Pagination import
import Pagination from '@mui/material/Pagination';
import Filter from './Filter/Filter';

// API
const API = "https://rickandmortyapi.com/api/character/";

const Locations = () => {
  const [pagesCount, setPagesCount] = useState(1);
  const [page, setPage] = useState(1);
  const [locations, setLocations] = useState([]);

  let [typeOptUpd, setTypeOptUpd] = useState([]);
  let [dimensionOptUpd, setDimensionOptUpd] = useState([]);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  useEffect(() => {
    // Use Capacitor HTTP to fetch data
    const getLocations = async () => {
      try {
        const response = await CapacitorHttp.get({
          url: API + `?page=${page}&name=${name}&type=${type}&dimension=${dimension}`,
        });

        const data = response.data;

        setPagesCount(data.info.pages);
        setLocations(data.results);

        const typeOpt = [];
        const dimensionOpt = [];

        data.results.map((item) => {
          typeOpt.push(item.type);
          dimensionOpt.push(item.dimension);
          return item;
        });

        setTypeOptUpd([...new Set(typeOpt)]);
        setDimensionOptUpd([...new Set(dimensionOpt)]);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    getLocations();
  }, [dimension, name, type, page]);

  const PaginationChange = (event, page) => setPage(page);

  // HTML
  return (
    <IonContent>
      <div className="locations"  id="locations">
        <div className="locations__container container">
          <h1 className="container__title">Locations</h1>
        {/* Filters */}
        <Filter
          name={name}
          type={typeOptUpd}
          dimension={dimensionOptUpd}
          locations={locations}
          setName={setName}
          setType={setType}
          setDimension={setDimension}
        />

        {/* Render locations */}
        <IonList className="container__list">
          {locations.map((item, key) => {
            return (
              <IonItem key={key} className="list__item">
                <IonLabel>
                  <h1 className="item__name">{item.name}</h1>
                  <h3 className="item__type">Type: <span>{item.type}</span></h3>
                  <h3 className="item__dimension">Dimension: <span>{item.dimension}</span></h3>
                  <p className="item__url">Watch the <a target="_blank" rel="noreferrer" href={item.url}>location</a></p>
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>

        {/* Pagination */}
        <Pagination
          className="container__pagination container__navigation"
          count={pagesCount}
          page={page}
          onChange={PaginationChange}
        />
        </div>
      </div>
      </IonContent>
  );
}

export default Locations;
