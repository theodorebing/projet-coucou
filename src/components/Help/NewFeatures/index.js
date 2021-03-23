// == Import : npm
import React, { useEffect } from 'react';

// == Import : local
import './style.scss';

// == Composant
const NewFeatures = ({ onHelpPages }) => {
  useEffect(() => {
    onHelpPages();
  });
  return (
    <section className="future">
      <h1 className="future-title">À venir!</h1>
      <div className="future-text">
        <h2 className="future-text-subtitle">Dans des versions ultérieures vous aurez la possibilité de :
        </h2>
        <p className="future-text-content">- Voir une frise chronologique qui replace les histoires de ma famille dans un contexte temporel et visuel.
        </p>
        <p className="future-text-content">- Avoir accès à une messagerie instantanée.
        </p>
        <p className="future-text-content">- Avoir accès à une barre de recherche pour filtrer les histoires.
        </p>
        <p className="future-text-content">- Identifier des personnes au sein même des textes des histoires avec un ajout d’onglet de notifications qui vous préviendra lorsque vous serez identifié.e dans une histoire.
        </p>
        <p className="future-text-content">- Ajouter des images, des vidéos et du son aux histoires.
        </p>
        <p className="future-text-content">- Rendre une histoire accessible uniquement à certains membres de la famille (si elle concerne seulement certaines personnes d’une famille).
        </p>
        <p className="future-text-content">- Accès à un système de brouillon pour la création d’histoire.
        </p>
        <p className="future-text-content">- Avoir la possibilité de rejoindre plusieurs familles.
        </p>
      </div>
    </section>
  );
};

export default NewFeatures;
