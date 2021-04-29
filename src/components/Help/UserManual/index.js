import React, { useEffect } from 'react';

import Header from './Header';
import Instructions from './Instructions';

import './styles.scss';

const UserManual = ({ onHelpPages }) => {
  useEffect(() => {
    onHelpPages();
  });
  return (
    <div className="userManual">
      <h1 className="userManual-title">Mode d'emploi</h1>
      <div className="userManual-text">
        <h2 className="userManual-text-subtitle">Comment ajouter une personne à mon arbre généalogique ?</h2>
        <p className="userManual-text-content">Afin d’ajouter une personne à son arbre généalogique, il suffit de cliquer sur le bouton + en bas de la page “Arbre”, de remplir le formulaire d’ajout avec les informations demandées, et de valider.
        </p>
        <h2 className="userManual-text-subtitle">Comment écrire une histoire ?</h2>
        <p className="userManual-text-content"> Afin d’écrire une histoire, il suffit de cliquer sur le bouton + en bas de la page “Histoires”, de remplir le formulaire d’ajout avec les informations demandées, et de valider.
        </p>
      </div>
      {/* <Header />
      <Instructions id="1" flex="reverse" titre="Comment créer un compte" />
      <Instructions id="2" titre="Comment créer un groupe" />
      <Instructions id="3" flex="reverse" titre="Comment rajouter des personnes à l'arbre" />
      <Instructions id="4" titre="Comment créer une Histoire" /> */}
    </div>
  );
};

export default UserManual;
