import React from 'react';
import JoinFamilyForm from './JoinFamilyForm';
import NewFamilyForm from './NewFamilyForm';
import Page from 'src/components/Page';

import './styles.scss';

const WelcomePage = () => {
  return (
    <Page >
      <div className='welcome__page'>
        <h1>Bienvenue sur Coucou!</h1>
        <JoinFamilyForm />
        <NewFamilyForm />
      </div>
    </Page>
  );
}

export default WelcomePage;
