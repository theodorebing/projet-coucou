import React from 'react';
import JoinFamilyForm from './JoinFamilyForm';
import NewFamilyForm from './NewFamilyForm';
import './styles.scss';

const WelcomePage = () => {
  return (
    <div className='welcome__page'>
      <h1>Bienvenue sur Coucou!</h1>
      <JoinFamilyForm />
      <NewFamilyForm />
    </div>
  );
}

export default WelcomePage;
