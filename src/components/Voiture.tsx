import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Voiture.css';
import '../assets/Voiture.css';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Camera from '@mui/icons-material/CameraAlt';
import View from '@mui/icons-material/Visibility';

const Voiture: React.FC = ({details}) => {

  const {
    marque,
    modele,
    kilometrage,
    puissance,
    place,
    porte,
    consommation,
    etat_vehicule,
    images,
    status
  } = details;
  const [isStarActive, setStarActive] = useState(false);

  const handleStarClick = () => {
    setStarActive(!isStarActive);
  };

  const statusColor = {
    0: "tomato",
    10: "#27c434"
  }

  const statusText = {
    0: "en vente",
    10: "en ettente"
  }

  return (
    <div className="car" style={{ width: '100%' }}>
      <div className="voiture row">
          <div className={"voiture-image col-lg-12"}>
            <span className="status" style={{ backgroundColor: statusColor[status] }}>{statusText[status]}</span>
            <p className="camera">
              <Camera />
              <span>5</span>
            </p>

            <Link className="view" to={{ pathname: "/details-annonces" }}>
              <View />
            </Link>
            <img
              src={images}
            />
          </div>

          <div className="voiture-description col-lg-12">
            <div className="voiture-titre">{marque} {modele}</div>

            <div className="table-description">
              <table border={1}>
                <tbody>
                  <tr>
                    <td>Kilometrage</td>
                    <td>Puissance</td>
                    <td>Place</td>
                  </tr>
                  <tr className='table-header'>
                    <td>{kilometrage}</td>
                    <td>{puissance}</td>
                    <td>{place}</td>
                  </tr>
                  <tr>
                    <td>Porte</td>
                    <td>Consommation</td>
                    <td>État du véhicule</td>
                  </tr>
                  <tr className='table-header'>
                    <td>{porte}</td>
                    <td>{consommation}</td>
                    <td>{etat_vehicule}</td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>

          <div className="voiture-voir col-lg-12">
            <div className="btn3 btn" style={{ fontSize: '14px', backgroundColor: '#c4c4c4' }}>
              20.000.000 MGA  <LocalOffer style={{ fontSize: '18px', marginTop: '-4px' }} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Voiture;

