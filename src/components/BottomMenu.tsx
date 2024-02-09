import React, { useEffect, useRef , useState } from "react";
import { Add, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonItem, IonIcon } from '@ionic/react';
import { Link } from "react-router-dom";
import { person } from 'ionicons/icons';

function BottomMenu() {
  const [value, setValue] = useState(0);
  const bottomMenuRef = useRef(null);

  const lockScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const bodyStyle = document.body.style;
    bodyStyle.overflow = 'hidden';
    bodyStyle.position = 'fixed';
    bodyStyle.top = `-${currentScrollPos}px`;
    bodyStyle.width = '100%';
  };

  const unlockScroll = () => {
    const bodyStyle = document.body.style;
    const savedScrollPos = bodyStyle.top;
    bodyStyle.removeProperty('overflow');
    bodyStyle.removeProperty('position');
    bodyStyle.removeProperty('top');
    bodyStyle.removeProperty('width');
    window.scrollTo(0, parseInt(savedScrollPos || '0') * -1);
  };

  useEffect(() => {
    window.addEventListener('keyboardWillShow', lockScroll);
    window.addEventListener('keyboardWillHide', unlockScroll);

    return () => {
      window.removeEventListener('keyboardWillShow', lockScroll);
      window.removeEventListener('keyboardWillHide', unlockScroll);
    };
  }, []);

  return (
    <div ref={bottomMenuRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",   
        alignItems: "center",
        position: "fixed",
        bottom:  0,
        backgroundColor: "#FCFBFA",
        padding: "5px",   
      }}
    >
      <Link to="/annonces" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Home style={{ fill: 'gray' , marginLeft:'20px'}} />
      </Link>

      <Link to="/Step-1" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Add style={{ fill: 'gray' }} />
      </Link>

      <IonMenuButton slot="start">
        <IonIcon icon={person} style={{ fill: 'gray',marginRight:'12px', fontSize:'26px' }} />
      </IonMenuButton>
    </div>
  );
}

export default BottomMenu;
