import React, { useEffect, useState } from 'react';
import '../assets/Voiture.css';
import LocalOffer from '@mui/icons-material/LocalOffer';
import v1 from '../assets/v5.jpg';
import { IonContent, IonModal, IonPage } from '@ionic/react';
import { Padding } from '@mui/icons-material';
import BottomMenu from '../components/BottomMenu';
import { useParams } from 'react-router';
import annonceService from '../services/annonce.service';
import img from '../assets/default.jpg';

const DetailsAnnonces: React.FC = () => {
    const {id} = useParams<any>();

    const detail = {
        etat: 0,
        prixInitial: 0,
        description: '',
        vehicule: {
            kilometrage: "20  000km", 
            puissance: "300 CV", 
            place: 5,
            porte: 4, 
            consommation: 0, 
            etat: 0, 
            transmission: "",
            energie: "", 
            categorie: "", 
            freinage: "", 
            couleur: "",
            images: [""],
            equipements: []
        }
    }

    const [annonce, setAnnonce] = useState<any>(detail);
    const fetchData = ()=>{
        annonceService.details(id)
        .then(result => {
            if (result.success) {
                setAnnonce(result.data);
            }
        })
        .catch(error => console.log(error)); 
    }
    useEffect(()=> fetchData(), []);


    

    const [isStarActive, setStarActive] = useState(false);

    const handleStarClick = () => {
        setStarActive(!isStarActive);
    };


    const statusColor = {
        0: "tomato",
        5: "#27c434",
        10: "blue",
        15: "gray",
        20: "green",
      }
    
    const statusText = {
        0: "Refusé",
        5: "En attente",
        10: "Disponible",
        15: "Indisponible",
        20: "Vendue"
    }

    const renderRows = () => {
        return (
            <>
                <tr>
                    <td><strong>Marque</strong></td>
                    <td>{annonce.vehicule.marque}</td>
                </tr>
                <tr>
                    <td><strong>Modele</strong></td>
                    <td>{annonce.vehicule.modele}</td>
                </tr>
                <tr>
                    <td><strong>Transmission</strong></td>
                    <td>{annonce.vehicule.transmission}</td>
                </tr>
                <tr>
                    <td><strong>Energie</strong></td>
                    <td>{annonce.vehicule.energie}</td>
                </tr>
                <tr>
                    <td><strong>Catégorie</strong></td>
                    <td>{annonce.vehicule.categorie}</td>
                </tr>
                <tr>
                    <td><strong>Freinage</strong></td>
                    <td>{annonce.vehicule.freinage}</td>
                </tr>
                <tr>
                    <td><strong>Consommation</strong></td>
                    <td>{annonce.vehicule.consommation}</td>
                </tr>
                <tr>
                    <td><strong>Kilométrage</strong></td>
                    <td>{annonce.vehicule.kilometrage}</td>
                </tr>
                <tr>
                    <td><strong>Nombre de porte</strong></td>
                    <td>{annonce.vehicule.porte}</td>
                </tr>
                <tr>
                    <td><strong>Nombre de place</strong></td>
                    <td>{annonce.vehicule.place}</td>
                </tr>
                <tr>
                    <td><strong>Couleur</strong></td>
                    <td>{annonce.vehicule.couleur}</td>
                </tr>
            </>
        );
    };

    const handleUpdate= async ()=>{
        const response = await annonceService.updateState(annonce.id);
        if (response.success) {
            annonceService.details(id)
            .then(result => {
                if (result.success) {
                    setAnnonce(result.data);
                }
            })
            .catch(error => console.log(error));
        }
    }

    return (
        <>
            <IonContent>
                <div className="car" style={{ width: '100%', padding: '20px' }}>
                    <div className="voiture row">
                        <div className={"voiture-image col-lg-12"}>
                            <img src={annonce.vehicule.images === null ? img : annonce.vehicule.images[0]} alt="Car image" />
                            <span className='status' style={{ backgroundColor: statusColor[annonce.etat], top:'4%' }}>{statusText[annonce.etat]} </span>
                            <div className="row">
                                {annonce.vehicule.images!==null && annonce.vehicule.images.map((image, index) => 
                                <img key={index} src={image} alt="Car image" style={{ width: '33.33%', height: '110px', padding: '7px' }} />
                                )}
                            </div>
                        </div>
                        
                        
                        <div className="voiture-description col-lg-12 py-2">
                            <div className="voiture-titre">{annonce.vehicule.marque} {annonce.vehicule.modele}
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
                                {annonce.prixInitial.toLocaleString()} MGA  <LocalOffer style={{ fontSize: '18px', marginTop: '-4px' }} />
                            </div>
                            {(annonce.etat === 10 || annonce.etat === 5) && 
                            <button className="btn btn-primary" style={{ fontSize: '14px'}} onClick={()=>handleUpdate()}>
                                Marquer comme Indisponible
                            </button>
                            }
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
