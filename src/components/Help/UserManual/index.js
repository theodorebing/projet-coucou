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
      <Header />
      <Instructions id="1" flex="reverse" titre="Comment créer un compte" />
      <Instructions id="2" titre="Comment créer un groupe" />
      <Instructions id="3" flex="reverse" titre="Comment rajouter des personnes à l'arbre" />
      <Instructions id="4" titre="Comment créer une Histoire" />
    </div>
  );
};

export default UserManual;
