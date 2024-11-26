import React from "react";
import { IonSelect, IonSelectOption, IonButton, IonItem, IonLabel } from "@ionic/react";

const Filter = (props) => {
  const handleSelectChange = (name, value) => {
    switch (name) {
      case "Species":
        props.setSpecies(value);
        break;

      case "Status":
        props.setStatus(value);
        break;

      case "Gender":
        props.setGender(value);
        break;

      default:
        break;
    }
  };

  const handleSelectAll = () => {
    props.setSpecies("");
    props.setStatus("");
    props.setGender("");
  };

  return (
    <div className="form">
      {/* Species Dropdown */}
      <IonItem>
        <IonLabel>Species</IonLabel>
        <IonSelect
          placeholder="Select Species"
          value={props.selectedSpecies}
          onIonChange={(e) => handleSelectChange("Species", e.detail.value)}
        >
          {props.species.map((item, key) => (
            <IonSelectOption key={key} value={item}>
              {item}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      {/* Status Dropdown */}
      <IonItem>
        <IonLabel>Status</IonLabel>
        <IonSelect
          placeholder="Select Status"
          value={props.selectedStatus}
          onIonChange={(e) => handleSelectChange("Status", e.detail.value)}
        >
          {props.status.map((item, key) => (
            <IonSelectOption key={key} value={item}>
              {item}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      {/* Gender Dropdown */}
      <IonItem>
        <IonLabel>Gender</IonLabel>
        <IonSelect
          placeholder="Select Gender"
          value={props.selectedGender}
          onIonChange={(e) => handleSelectChange("Gender", e.detail.value)}
        >
          {props.gender.map((item, key) => (
            <IonSelectOption key={key} value={item}>
              {item}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      {/* Reset Button */}
      <IonButton expand="block" onClick={handleSelectAll}>
        Reset All Filters
      </IonButton>
    </div>
  );
};

export default Filter;
