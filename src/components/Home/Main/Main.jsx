import React, { useEffect } from 'react';
import { Typed } from 'react-typed';
import './Main.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { IonContent, IonButton, IonText } from '@ionic/react';

const Main = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <IonContent className="main">
      <div className="main__container container">
        <h3 className="main__container__title" data-aos="fade-down">
          Know more about the 
          <br />
          <Typed 
            strings={['cartoon', 'characters']}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </h3>
        <IonButton 
          href="#characters" 
          className="main__container__button" 
          data-aos="fade-up" 
          color="primary">
          Get started
        </IonButton>
      </div>
    </IonContent>
  );
}

export default Main;
