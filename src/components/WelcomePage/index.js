import React, { useEffect } from 'react';
import JoinFamilyForm from 'src/containers/WelcomePage/JoinFamilyForm';
import CreateFamilyForm from 'src/containers/WelcomePage/CreateFamilyForm';

import './styles.scss';

const WelcomePage = ({ noHelpButtons }) => {
  useEffect(() => {
    noHelpButtons();
  });
  return (
    <div className="welcome__page">
      <h1>Bienvenue sur Coucou!</h1>
      <JoinFamilyForm />
      <CreateFamilyForm />
    </div>
  );
};

export default WelcomePage;
