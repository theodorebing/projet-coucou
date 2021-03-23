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
      <span className="welcome__page__titleContainer">
        <h1 className="welcome__page__title">Bienvenue sur </h1><h1 className="welcome__page__title welcome__page__title__coucou">Coucou!</h1>
      </span>
      <JoinFamilyForm />
      <CreateFamilyForm />
    </div>
  );
};

export default WelcomePage;
