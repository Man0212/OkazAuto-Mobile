import React from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
} from '@ionic/react';

import { useHistory, useLocation } from 'react-router-dom';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, logOutOutline, logOutSharp } from 'ionicons/icons';
import '../assets/Menu.css';
import userService from '../services/user.service';
import { WizardStore } from '../pages/store';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Login',
    url: '/Login',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Sign',
    url: '/Sign',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => {
    WizardStore.update((s) => {
      s.Marque = undefined;
      s.Model = undefined;
      s.Categorie = undefined;
      s.Energie = undefined;
      s.Transmission = undefined;
      s.Freinage = undefined;
      s.Kilometrage = 0;
      s.Puissance = 0;
      s.Consommation = 0;
      s.Place = 0;
      s.Porte = 0;
      s.Equipement = [];
      s.Images = [];
      s.Description = "";
      s.Etat = 0;
      s.Prix = 0;
      s.progress = 10;
    });
    userService.logout();
    history.push('/login');
  };

  return (
    <IonMenu contentId="main" type="overlay" side='end'>
      <IonContent>
        <IonList id="Login-list">
          <IonListHeader>Login</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" size='small' slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
        
        <IonButton expand="full" fill="clear" onClick={handleLogout} className="logout-button" style={{ bottom: '0', position: 'absolute' }}>
          <IonIcon slot="start" ios={logOutOutline} md={logOutSharp}  />
          Déconnexion
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
