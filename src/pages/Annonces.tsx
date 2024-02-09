import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Voiture from '../components/Voiture';
import v1 from '../assets/v5.jpg';
import v2 from '../assets/v2.jpg';
import '../assets/bootstrap-profiles.min.css';
import '../assets/Annonces.css';
import BottomMenu from '../components/BottomMenu';
import annonceService from '../services/annonce.service';

const Annonces: React.FC = () => {
  const [annonces, setAnnonces] = useState<any>([]);

  const fetchData=()=>{
    annonceService.mesAnnonces()
    .then(result => {
      if (result.success) {
        setAnnonces(result.data);
      }
      console.log(result.data);
    })
    .catch(error => console.log(error));
  }
  useEffect(()=>{ fetchData() }, [])

  return (
    <>
      <IonContent>
        <div className='mes-annonces' style={{ backgroundColor: '#f4f4f4' }}>
          <div className="page-annonce">
            <div className="row">
              <div className="annonce">
                <div className="annonces">
                  {annonces.map((element: any, index: any) => (
                    <Voiture key={index} details={element} />
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

