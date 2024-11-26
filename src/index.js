import React from 'react';
import ReactDOM from 'react-dom/client';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import App from './App'; 

import '@ionic/react/css/core.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <IonApp>
      {/* Wraping the app with IonReactRouter to enable routing in Ionic */}
      <IonReactRouter>
        <IonContent>
          {/* Main App Component */}
          <App />
        </IonContent>
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>
);
