// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
// import './styles.scss';
// import Content from 'src/components/Content';
import Index from 'src/components/Index';
import Menu from 'src/containers/Menu';
import WelcomePage from '../WelcomePage';
import About from '../Help/About';
import Menu from 'src/containers/Menu';
import UserManual from '../Help/UserManual';
import Faq from '../Help/FAQ';
import NewFeatures from '../Help/NewFeatures';
import Contact from '../Help/Contact';
import LegalTerms from '../Help/LegalTerms';
import Profile from '../Profile';
import Tree from '../Tree';
import Family from '../Family';
import Stories from '../Stories';
import Help from '../Help';

// == Composant
const App = ({ isLogged }) => (
  <div className="app">
    <Switch>
      <Route path="/help" exact>
        {isLogged && (
          <Menu />
        )}
        <Help />
      </Route>
      <Route path="/help/UserManual" exact>
        {isLogged && (
          <Menu />
        )}
        <UserManual />
      </Route>
      <Route path="/help/Faq" exact>
        {isLogged && (
          <Menu />
        )}
        <Faq />
      </Route>
      <Route path="/help/NewFeatures" exact>
        {isLogged && (
          <Menu />
        )}
        <NewFeatures />
      </Route>
      <Route path="/help/Contact" exact>
        {isLogged && (
          <Menu />
        )}
        <Contact />
      </Route>
      <Route path="/help/LegalTerms" exact>
        {isLogged && (
          <Menu />
        )}
        <LegalTerms />
      </Route>

      {isLogged && (
        <>
          <Menu />
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/tree" exact>
            <Tree />
          </Route>
          <Route path="/family" exact>
            <Family />
          </Route>
          <Route path="/stories" exact>
            <Stories />
          </Route>
        </>
      )}

      {!isLogged && (
        <>
          <Route path="/">
            <Index />
          </Route>
        </>
      )}

    </Switch>
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
