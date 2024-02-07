import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Voiture from '../components/Voiture';
import v1 from '../assets/v5.jpg';
import v2 from '../assets/v2.jpg';
import '../assets/bootstrap-profiles.min.css';
import '../assets/Annonces.css';
import BottomMenu from '../components/BottomMenu';


const Annonces: React.FC = () => {
  const voitures = [
    {
      marque: "Mercedes", modele: "C63", kilometrage: "20 000km", puissance: "300 CV", place: 5,
      porte: 4, consommation: "8 L/100km", etat_vehicule: "Occasion", transmission: "Automatique",
      energie: "Essence", categorie: "Sedan", freinage: "ABS", couleur: "Noir",
      equipements: "Climatisation, GPS, Caméra de recul", images: v1,
      annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
      etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année 2017 en excellent état.",
      utilisateur_id: 1, status: 0
    },
    {
      marque: "Porsche", modele: "911 Turbo", kilometrage: "15 000km", puissance: "500 CV", place: 2,
      porte: 2, consommation: "10 L/100km", etat_vehicule: "Occasion", transmission: "Manuelle",
      energie: "Essence", categorie: "Sport", freinage: "Céramique", couleur: "Rouge",
      equipements: "Climatisation, Sièges chauffants, Toit ouvrant", images: v2,
      annonce_id: 2, prix_initial: 50000, date_publication: "2024-01-13", date_fermeture: "2024-02-13",
      etat_annonce: "Disponible", description: "Une magnifique Porsche 911 Turbo de l'année 2020 avec un faible kilométrage.",
      utilisateur_id: 2, status: 10
    },
    {
      marque: "Mercedes", modele: "C63", kilometrage: "20 000km", puissance: "300 CV", place: 5,
      porte: 4, consommation: "8 L/100km", etat_vehicule: "Occasion", transmission: "Automatique",
      energie: "Essence", categorie: "Sedan", freinage: "ABS", couleur: "Noir",
      equipements: "Climatisation, GPS, Caméra de recul", images: v1,
      annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
      etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année 2017 en excellent état.",
      utilisateur_id: 1, status: 10
    },
    {
      marque: "Porsche", modele: "911 Turbo", kilometrage: "15 000km", puissance: "500 CV", place: 2,
      porte: 2, consommation: "10 L/100km", etat_vehicule: "Occasion", transmission: "Manuelle",
      energie: "Essence", categorie: "Sport", freinage: "Céramique", couleur: "Rouge",
      equipements: "Climatisation, Sièges chauffants, Toit ouvrant", images: v2,
      annonce_id: 2, prix_initial: 50000, date_publication: "2024-01-13", date_fermeture: "2024-02-13",
      etat_annonce: "Disponible", description: "Une magnifique Porsche 911 Turbo de l'année 2020 avec un faible kilométrage.",
      utilisateur_id: 2, status: 0
    },
    {
      marque: "Mercedes", modele: "C63", kilometrage: "20 000km", puissance: "300 CV", place: 5,
      porte: 4, consommation: "8 L/100km", etat_vehicule: "Occasion", transmission: "Automatique",
      energie: "Essence", categorie: "Sedan", freinage: "ABS", couleur: "Noir",
      equipements: "Climatisation, GPS, Caméra de recul", images: v1,
      annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
      etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année 2017 en excellent état.",
      utilisateur_id: 1, status: 10
    },
  ];

  return (
    <>
      <IonContent>
        <div className='mes-annonces' style={{ backgroundColor: '#f4f4f4' }}>
          <div className="page-annonce">
            <div className="row">
              <div className="annonce">
                <div className="annonces">
                  {voitures.map((details, index) => (
                    <Voiture key={index} details={details} />
                  ))}
                </div>
                <div style={{ height: '60px' }}></div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </IonContent>
      <BottomMenu />
    </>
  );
}

export default Annonces;

