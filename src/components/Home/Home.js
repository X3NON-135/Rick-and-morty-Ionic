import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonFooter,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Home.css";
import Main from "./Main/Main";

const Home = () => {
  return (
    <section className="home" id="home">
      <IonPage>
        {/* Home section */}
        {/* Header */}
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home Header</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Header />

        {/* Main Content */}
        <IonContent>
          <Main />
        </IonContent>

        {/* Footer */}
        <IonFooter>
          <IonToolbar>
            <IonTitle>Home Footer</IonTitle>
          </IonToolbar>
        </IonFooter>
        <Footer />
      </IonPage>
    </section>
  );
};

export default Home;
