import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButtons, IonContent, IonList, IonItem, IonIcon, IonButton } from '@ionic/react'; 
import { menuOutline, closeOutline } from 'ionicons/icons'; // Importing Ionic icons for menu and close
import aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const header = useRef();
  const menuRef = useRef();

  const showMenu = () => {
    setIsVisible(true);
  };

  const hideMenu = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      hideMenu();
    }
  };

  useEffect(() => {
    aos.init();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  window.onscroll = () => {
    window.scrollY >= 50
      ? header.current.classList.add('bg-header')
      : header.current.classList.remove('bg-header');
  };

  return (
    <IonHeader className="header" ref={header}>
      <IonToolbar className="header__nav container">
        <IonTitle className="header__nav__logo" data-aos="fade-right">
          Rick and Morty
        </IonTitle>

        {/* Menu Button */}
        <IonButtons slot="start">
          <IonButton onClick={showMenu} className="header__nav__toggle" data-aos="fade-left">
            <IonIcon icon={menuOutline} />
          </IonButton>
        </IonButtons>

        {/* Close Button */}
        {isVisible && (
          <div
            className="header__nav__close"
            style={{ top: isVisible ? '0' : '-100%' }}
            onClick={hideMenu}
          >
            <IonIcon icon={closeOutline} />
          </div>
        )}
      </IonToolbar>

      {/* Menu List */}
      {isVisible && (
        <IonContent ref={menuRef}>
          <IonList
            className="header__nav__list"
            data-aos="fade-left"
            style={{ top: isVisible ? '0' : '-100%' }}
          >
            <IonItem className="header__nav__list__item" onClick={hideMenu}>
              <a href="/characters" className="header__nav__list__item__link">
                Characters
              </a>
            </IonItem>
            <IonItem className="header__nav__list__item" onClick={hideMenu}>
              <a href="/episodes" className="header__nav__list__item__link">
                Episodes
              </a>
            </IonItem>
            <IonItem className="header__nav__list__item" onClick={hideMenu}>
              <a href="/locations" className="header__nav__list__item__link">
                Locations
              </a>
            </IonItem>
            <IonItem className="header__nav__list__item" onClick={hideMenu}>
              <a href="/watchList" className="header__nav__list__item__link">
                My watch list
              </a>
            </IonItem>
          </IonList>
        </IonContent>
      )}
    </IonHeader>
  );
}

export default Header;
