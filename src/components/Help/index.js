/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';
import Header from './Header';
import About from './About';
import UserManual from './UserManual';
import Faq from './FAQ';
import NewFeatures from './NewFeatures';

// Style
import './style.scss';
import Contact from './Contact';


// == Composant
function Help() {

  return (
    <Page>
      <div className="help">
        <Header />
        {/* <About titre="A propos" /> */}
        {/* <UserManual /> */}
        {/* <Faq /> */}
        {/* <NewFeatures /> */}
        <Contact />
      </div>
    </Page>
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
export default Help;
