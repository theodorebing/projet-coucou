/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';

// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

// == Import : local
// Composants
import Page from 'src/components/Page';
// import Header from './Header';
import About from './About';


// Style
import './styles.scss';



// == Composant
const Help = () => {
  return (
    <Page>
      <div className="help">
        {/* {isLogged && (
          <Header />
        )} */}
        <About />
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
