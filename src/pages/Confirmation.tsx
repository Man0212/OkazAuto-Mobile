import React from 'react';
import {
  IonContent,
  IonItem,
} from "@ionic/react";
import { useHistory  } from "react-router-dom";
import { WizardStore } from "./store";

const Confirmation: React.FC = () => {
  const history = useHistory();
  const state = WizardStore.useState((s) => s);

  const handleBack = () => {
    history.push('/Step-1');
  };

  return (
    <>
        <IonContent style={{ overflowY: 'scroll' }}>
          {Object.keys(state).map((key) => (
            <IonItem key={key}>
                {key}: {state[key]}
            </IonItem>
          ))}

          <div className="btn-group" style={{ padding: '10px' }}>
            <button className="create-btn" onClick={handleBack}>
              annuler
            </button>
            <button className="next-btn" onClick={() => history.push("/Step-1")}>
              confirmer
            </button>
          </div>
        </IonContent>
    </>
  );
};

export default Confirmation;
