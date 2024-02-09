import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonList,
  IonListHeader,
  IonLoading,
} from "@ionic/react";
import { useHistory  } from "react-router-dom";
import { WizardStore } from "./store";
import annonceService from '../services/annonce.service';

const Confirmation: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const history = useHistory();
  const state = WizardStore.useState((s) => s);
  const annonce = {
    description: state.Description,
    prixInitial: state.Prix,
    vehicule: {
      marqueId: state.Marque.id,
      modeleId: state.Model.id,
      categorieId: state.Categorie.id,
      energieId: state.Energie.id,
      transmissionId: state.Transmission.id,
      freinageId: state.Freinage.id,
      puissance: state.Puissance,
      consommation: state.Consommation,
      porte: state.Porte,
      place: state.Place,
      equipements: [],
      images: []
    }
  }

  const handleBack = () => {
    history.push('/Step-1');
  };

  const handleSubmit=async ()=>{
    setLoading(true);
    try {
      const response = await annonceService.create(annonce);
      if (response.success) {

      } else {
        alert(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
   
  }

  return (
    <>
        <IonContent style={{ overflowY: 'scroll' }}>
          <IonItem>
            Marque: {state.Marque.label}
          </IonItem>
          <IonItem>
            Modele: {state.Model.label}
          </IonItem>
          <IonItem>
            Categorie: {state.Categorie.label}
          </IonItem>
          <IonItem>
            Puissance: {state.Puissance} CV
          </IonItem>
          <IonItem>
            Transmission: {state.Transmission.label}
          </IonItem>
          <IonItem>
            Energie: {state.Energie.label}
          </IonItem>
          <IonItem>
            Freinage: {state.Freinage.label}
          </IonItem>
          <IonItem>
            Consommation: {state.Consommation} L / 100Km
          </IonItem>
          <IonItem>
            Kilometrage: {state.Kilometrage}Km
          </IonItem>
          <IonItem>
            Porte: {state.Porte}
          </IonItem>
          <IonItem>
            Place: {state.Place}
          </IonItem>
          <IonItem>
            <IonListHeader>
              Equipement: 
            </IonListHeader>
            {state.Equipement?.map((element, index) => 
              <IonItem key={index}> {element} </IonItem>
            )}
          </IonItem>
          <IonItem>
            Prix: {state.Prix}
          </IonItem>
          <IonItem>
            Description: {state.Description}
          </IonItem>
          <IonItem>
            Etat du véhicule: {state.Etat}
          </IonItem>

          <div className="btn-group" style={{ padding: '10px' }}>
            <button className="create-btn" onClick={handleBack}>
              annuler
            </button>
            <button className="next-btn" onClick={() => handleSubmit()}>
              confirmer
            </button>
          </div>
        </IonContent>
        <IonLoading
          isOpen={loading}
          message={"Création de l'annonce"}
        />
    </>
  );
};

export default Confirmation;
