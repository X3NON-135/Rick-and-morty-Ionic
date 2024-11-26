import React, { useState, useEffect } from 'react';
import { ReactTyped  } from 'react-typed';
import './Main.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { IonContent, IonButton, IonText } from '@ionic/react';

const Main = () => {
  const [strings, setStrings] = useState([]);
  
  useEffect(() => {
    if (strings.length === 0) {
      setStrings(['cartoon', 'characters']);
    }
    aos.init();
  }, [strings]);

  return (
    <div className="main">
      <div className="main__container container">
        <h3 className="main__container__title" data-aos="fade-down">
          Search info about
          <br />
          <ReactTyped  
            strings={strings}
            typeSpeed={100}
            backSpeed={100}
            loop
          >
          </ReactTyped>
        </h3>
        <IonButton 
          href="/characters" 
          className="main__container__button" 
          data-aos="fade-up" 
          color="primary">
          Get started
        </IonButton>
      </div>
    </div>
  );
}

export default Main;
