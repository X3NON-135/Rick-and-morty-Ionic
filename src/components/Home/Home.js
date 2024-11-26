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
    <IonPage className="home" id="home">
      {/* Home section */}
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Main />

      <Footer />
    </IonPage>
  );
};

export default Home;
