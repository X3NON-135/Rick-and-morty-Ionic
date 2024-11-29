import React from 'react';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Locations from './components/Locations/Locations';
import List from './components/List/List';
import { home, people, film, location, list } from 'ionicons/icons';

function App() {

  const handleTabClick = (href) => {
    if (window.location.pathname === href) {
      // Refresh the page when the same tab is clicked
      window.location.reload();
    } else {
      // Navigate to the new tab
      window.location.href = href;
    }
  };
  
  return (
    <IonApp className="App">
      <IonReactRouter>
        <IonTabs>
          {/* IonRouterOutlet is required to render the correct route */}
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact />
            <Route path="/characters" component={Characters} exact />
            <Route path="/episodes" component={Episodes} exact />
            <Route path="/locations" component={Locations} exact />
            <Route path="/list" component={List} exact />
            <Route path="/" component={Home} exact />
          </IonRouterOutlet>

          {/* Tab bar containing buttons for each route */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" onClick={() => handleTabClick('/home')}>
              <IonIcon icon={home} style={{ fontSize: '30px' }} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="characters" onClick={() => handleTabClick('/characters')}>
              <IonIcon icon={people} style={{ fontSize: '30px' }} />
              <IonLabel>Characters</IonLabel>
            </IonTabButton>
            <IonTabButton tab="episodes" onClick={() => handleTabClick('/episodes')}>
              <IonIcon icon={film} style={{ fontSize: '30px' }} />
              <IonLabel>Episodes</IonLabel>
            </IonTabButton>
            <IonTabButton tab="locations" onClick={() => handleTabClick('/locations')}>
              <IonIcon icon={location} style={{ fontSize: '30px' }} />
              <IonLabel>Locations</IonLabel>
            </IonTabButton>
            <IonTabButton tab="list" onClick={() => handleTabClick('/list')}>
              <IonIcon icon={list} style={{ fontSize: '30px' }} />
              <IonLabel>List</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
