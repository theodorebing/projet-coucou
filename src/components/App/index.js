// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Menu from 'src/containers/Menu';
// import Content from 'src/components/Content';
import Index from 'src/components/Index';
import WelcomePage from '../WelcomePage';

// == Composant
const App = ({ isLogged }) => (
  <div className="app">
    {isLogged && (
      <>
        <Menu />
        <WelcomePage />
      </>
    )}
    {!isLogged && (

      <Index />
    )}

    {/* <Content /> */}
  </div>
);

App.propTypes = {
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: false,
};

// == Export
export default App;
