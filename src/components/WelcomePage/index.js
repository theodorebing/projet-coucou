import React from 'react';
import Page from 'src/components/Page';
import JoinFamilyForm from 'src/containers/WelcomePage/JoinFamilyForm';
import NewFamilyForm from './NewFamilyForm';

import './styles.scss';

const WelcomePage = () => (
  <Page>
    <div className="welcome__page">
      <h1>Bienvenue sur Coucou!</h1>
      <JoinFamilyForm />
      <NewFamilyForm />
    </div>
  </Page>
);

export default WelcomePage;
