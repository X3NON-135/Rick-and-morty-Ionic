import React from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

const Popup = ({ isOpen, info, handleClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={handleClose}>
      {/* Header Section */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Character Info</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content Section */}
      <IonContent>
        <div className="popup__wrapper">
          <IonImg src={info.image} alt="character avatar" />
          <IonList>
            <IonItem>
              <IonLabel>
                <strong>Name:</strong> <span>{info.name}</span>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Watch the episode:</strong>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={info.episode}
                  style={{ color: "var(--ion-color-primary)" }}
                >
                  Click Here
                </a>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Gender:</strong> <span>{info.gender}</span>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Location:</strong> <span>{info.location}</span>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Species:</strong> <span>{info.species}</span>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Status:</strong> <span>{info.status}</span>
              </IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      {/* Footer Section */}
      <IonButton expand="block" onClick={handleClose}>
        Close
      </IonButton>
    </IonModal>
  );
};

export default Popup;
