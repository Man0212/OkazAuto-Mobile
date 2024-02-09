import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Voiture.css';
import '../assets/Voiture.css';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Camera from '@mui/icons-material/CameraAlt';
import View from '@mui/icons-material/Visibility';
import v2 from '../assets/v2.jpg';

import img from '../assets/default.jpg';

const Voiture: React.FC = ({details}) => {

const [isStarActive, setStarActive] = useState(false);

  const handleStarClick = () => {
    setStarActive(!isStarActive);
  };

  const statusColor = {
    0: "tomato",
    5: "purple",
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

  return (
    <div className="car" style={{ width: '100%' }}>
      <div className="voiture row">
          <div className={"voiture-image col-lg-12"}>
            <span className="status" style={{ backgroundColor: statusColor[details.etat] }}>{statusText[details.etat]}</span>
            <p className="camera">
              <Camera />
              <span>{details.vehicule.images!==null && details.vehicule.images.length}</span>
            </p>
            <Link className="view" to={{ pathname: "/details-annonces/" + details.id }}>
              <View />
            </Link>
            {(details.vehicule.images!==null && details.vehicule.images.length) ? <img src={details.vehicule.images[0]} /> : <img src={img} />}
            {/* <img src={details.vehicule.images[0]} /> */}
          </div>

          <div className="voiture-description col-lg-12">
            <div className="voiture-titre">{details.vehicule.marque} {details.vehicule.modele}</div>

            <div className="table-description">
              <table border={1}>
                <tbody>
                  <tr>
                    <td>Kilometrage</td>
                    <td>Puissance</td>
                    <td>Place</td>
                  </tr>
                  <tr className='table-header'>
                    <td>{details.vehicule.kilometrage}</td>
                    <td>{details.vehicule.puissance}</td>
                    <td>{details.vehicule.place}</td>
                  </tr>
                  <tr>
                    <td>Porte</td>
                    <td>Consommation</td>
                    <td>État du véhicule</td>
                  </tr>
                  <tr className='table-header'>
                    <td>{details.vehicule.porte}</td>
                    <td>{details.vehicule.consommation}</td>
                    <td>{details.vehicule.etat} / 10</td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>

          <div className="voiture-voir col-lg-12">
            <div className="btn3 btn" style={{ fontSize: '14px', backgroundColor: '#c4c4c4' }}>
              {details.prixInitial.toLocaleString()} MGA  <LocalOffer style={{ fontSize: '18px', marginTop: '-4px' }} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Voiture;

