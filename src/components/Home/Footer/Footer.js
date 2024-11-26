import React from 'react';
import { IonFooter, IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react'; // Importing Ionic components
import { logoInstagram, logoFacebook, logoTwitter } from 'ionicons/icons'; // Importing icons from Ionic's icon library
import './Footer.css';

const Footer = () => {
  return (
    <IonFooter>
      <IonContent>
        <div className="footer__container container">
          <IonList className="footer__container__social-links">
            <IonItem className="footer__container__social-links__item" button>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rickandmorty/" className="footer__container__social-links__item__link">
                <IonIcon icon={logoInstagram} />
              </a>
            </IonItem>
            <IonItem className="footer__container__social-links__item" button>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/RickandMorty" className="footer__container__social-links__item__link">
                <IonIcon icon={logoFacebook} />
              </a>
            </IonItem>
            <IonItem className="footer__container__social-links__item" button>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rickandmorty/" className="footer__container__social-links__item__link">
                <IonIcon icon={logoTwitter} />
              </a>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonFooter>
  );
}

export default Footer;
