// Annonces.tsx
import React from 'react';
import BottomMenu from '../components/BottomMenu';
import Image from '../components/Image';

const Annonces: React.FC = () => {
    const annonces = {
        justifyContent : 'center',
        alignItems: 'center', // Centre les images horizontalement
        overflowY: 'scroll', // Ajout du défilement vertical
        height: '100vh', // Ajustez la hauteur totale du conteneur selon vos besoins (100vh signifie 100% de la hauteur de la vue)
    };

    return (
        <div style={annonces}>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <BottomMenu />
        </div>
    );
};

export default Annonces;
