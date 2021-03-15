// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';
// import Content from 'src/components/Content';
import Index from 'src/containers/Index';
import Menu from 'src/containers/Menu';
import Stories from 'src/containers/Stories';
import StoryDetails from 'src/containers/Stories/StoryDetails';
import WelcomePage from '../WelcomePage';
import UserManual from '../Help/UserManual';
import Faq from '../Help/FAQ';
import NewFeatures from '../Help/NewFeatures';
import Contact from '../Help/Contact';
import LegalTerms from '../Help/LegalTerms';
import Profile from '../Profile';
import Tree from '../Tree';
import Family from '../Family';
import Help from '../Help';

// == Composant
const App = ({ isLogged, checkConnection, familyId }) => {
  useEffect(() => {
    checkConnection();
  }, []);
  return (
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

        {!isLogged && (
        <>
          <Route path="/">
            <Index />
          </Route>
        </>
        )}

        {isLogged && (
          <>
            <Menu />
            {!familyId && (
            <>
              <Route path="/" exact>
                <WelcomePage />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
            </>
            )}
            {familyId && (
            <>
              <Route path="/" exact>
                <Tree />
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
              <Route path="/family/stories/:storyId">
                <StoryDetails />
              </Route>
            </>
            )};
          </>
        )}

      </Switch>
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool,
  checkConnection: PropTypes.func.isRequired,
  familyId: PropTypes.number,
};

App.defaultProps = {
  isLogged: false,
  familyId: null,
};

// == Export
export default App;
