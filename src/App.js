import React from 'react';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Locations from './components/Locations/Locations';
import List from './components/List/List';
import { home, people, film, location, list } from 'ionicons/icons';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact />
            <Route path="/characters" component={Characters} exact />
            <Route path="/episodes" component={Episodes} exact />
            <Route path="/locations" component={Locations} exact />
            <Route path="/list" component={List} exact />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="characters" href="/characters">
              <IonIcon icon={people} />
              <IonLabel>Characters</IonLabel>
            </IonTabButton>
            <IonTabButton tab="episodes" href="/episodes">
              <IonIcon icon={film} />
              <IonLabel>Episodes</IonLabel>
            </IonTabButton>
            <IonTabButton tab="locations" href="/locations">
              <IonIcon icon={location} />
              <IonLabel>Locations</IonLabel>
            </IonTabButton>
            <IonTabButton tab="list" href="/list">
              <IonIcon icon={list} />
              <IonLabel>List</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
