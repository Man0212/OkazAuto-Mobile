import React, { useState } from "react";
import { Add, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonItem, IonIcon } from '@ionic/react';
import { Link } from "react-router-dom";
import { person } from 'ionicons/icons';

function BottomMenu() {
  const [value, setValue] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",  
        alignItems: "center",
        position: "fixed",
        bottom: 0,
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
        <IonIcon icon={person} style={{ fill: 'gray',marginRight:'12px' }} />
      </IonMenuButton>
    </div>
  );
}

export default BottomMenu;
