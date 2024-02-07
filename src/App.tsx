import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Confirmation from './pages/Confirmation';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonItem, IonIcon } from '@ionic/react';

import './theme/variables.css';
import Annonces from './pages/Annonces';
import DetailsAnnonces from './pages/DetailsAnnonces';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="Login" />
            </Route>
            <Route path="/Sign" exact={true}>
              <Sign />
            </Route>
            <Route path="/Login" exact={true}>
              <Login />
            </Route>
            <Route path="/step-1" exact={true}>
              <Step1 />
            </Route>
            <Route path="/step-2" exact={true}>
              <Step2 />
            </Route>
            <Route path="/step-3" exact={true}>
              <Step3 />
            </Route>
            <Route path="/step-4" exact={true}>
              <Step4 />
            </Route>
            <Route path="/annonces" exact={true}>
              <Annonces />
            </Route>
            <Route path="/confirmation" exact={true}>
              <Confirmation />
            </Route>
            <Route path="/annonces" exact={true}>
              <Annonces />
            </Route>
            <Route path="/details-annonces" exact={true}>
              <DetailsAnnonces />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
