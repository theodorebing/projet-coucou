/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
import HelpHeader from '../HelpHeader';

// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';
import Header from './Header';
import Instructions from './Instructions';

// Style
import './styles.scss';

// == Composant
function UserManual() {

  return (
    <>
      <HelpHeader />
      <div className="userManual">
        <Header />
        <Instructions id="1" flex="reverse" titre="Comment créer un compte" />
        <Instructions id="2" titre="Comment créer un groupe" />
        <Instructions id="3" flex="reverse" titre="Comment rajouter des personnes à l'arbre" />
        <Instructions id="4" titre="Comment créer une Histoire" />
      </div>
    </>
  );
}

// Recipe.propTypes = {
// recipe: PropTypes.shape({
//   title: PropTypes.string.isRequired,
//   thumbnail: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   ingredients: PropTypes.array.isRequired,
//   instructions: PropTypes.array.isRequired,
// }),
// };

// Recipe.defaultProps = {
//   recipe: null,
// };

// == Export
export default UserManual;
