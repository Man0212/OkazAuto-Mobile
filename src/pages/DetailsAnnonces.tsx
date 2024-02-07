import React, { useState } from 'react';
import '../assets/Voiture.css';
import LocalOffer from '@mui/icons-material/LocalOffer';
import v1 from '../assets/v5.jpg';
import { IonContent, IonPage } from '@ionic/react';
import { Padding } from '@mui/icons-material';
import BottomMenu from '../components/BottomMenu';

const DetailsAnnonces: React.FC = () => {

    const details = {
        marque: "Mercedes", modele: "C63", kilometrage: "20  000km", puissance: "300 CV", place: 5,
        porte: 4, consommation: "8 L/100km", etat_vehicule: "Occasion", transmission: "Automatique",
        energie: "Essence", categorie: "Sedan", freinage: "ABS", couleur: "Noir",
        equipements: "Climatisation, GPS, Caméra de recul", images: v1,
        annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
        etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année  2017 en excellent état.",
        utilisateur_id: 1, status: 0
    };

    const [isStarActive, setStarActive] = useState(false);

    const handleStarClick = () => {
        setStarActive(!isStarActive);
    };

    const statusColor = {
        0: "tomato",
        10: "#27c434"
    };

    const statusText = {
        0: "en vente",
        10: "en ettente"
    };

    const renderRows = () => {
        return Object.entries(details).map(([key, value], index) => {
            return (
                <tr key={index}>
                    <td><strong>{key}</strong></td>
                    <td>{value}</td>
                </tr>
            );
        });
    };

    return (
        <>
            <IonContent>
                <div className="car" style={{ width: '100%', padding: '20px' }}>
                    <div className="voiture row">
                        <div className={"voiture-image col-lg-12"}>
                            <img src={details.images} alt="Car image" />
                            <span className='status' style={{ backgroundColor: statusColor[details.status], top:'4%' }}>{statusText[details.status]} </span>
                            <div className="row">
                                <img src={details.images} alt="Car image" style={{ width: '33.33%', height: '110px', padding: '7px' }} />
                                <img src={details.images} alt="Car image" style={{ width: '33.33%', height: '110px', padding: '7px' }} />
                                <img src={details.images} alt="Car image" style={{ width: '33.33%', height: '110px', padding: '7px' }} />
                                <img src={details.images} alt="Car image" style={{ width: '33.33%', height: '110px', padding: '7px' }} />
                            </div>
                        </div>
                        
                        
                        <div className="voiture-description col-lg-12 py-2">
                            <div className="voiture-titre">{details.marque} {details.modele}
                            </div>

                            <div className="table-description">
                                <table border={1}>
                                    <tbody style={{ fontSize: '16px' }}>
                                        {renderRows()}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div className="voiture-voir col-lg-12">
                            <div className="btn3 btn" style={{ fontSize: '14px', backgroundColor: '#c4c4c4' }}>
                                20.000.000 MGA  <LocalOffer style={{ fontSize: '18px', marginTop: '-4px' }} />
                            </div>
                            <div className="btn btn-primary" style={{ fontSize: '14px'}}>
                                Marquer comme vendu
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'80px'}}></div>
            </IonContent>
            <BottomMenu/>
        </>
    );
}

export default DetailsAnnonces;
