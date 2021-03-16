import React from 'react';
import Page from 'src/components/Page';
import JoinFamilyForm from 'src/containers/WelcomePage/JoinFamilyForm';
import CreateFamilyForm from 'src/containers/WelcomePage/CreateFamilyForm';

import './styles.scss';

const WelcomePage = () => (
  <Page>
    <div className="welcome__page">
      <h1>Bienvenue sur Coucou!</h1>
      <JoinFamilyForm />
      <CreateFamilyForm />
    </div>
  </Page>
);

export default WelcomePage;
