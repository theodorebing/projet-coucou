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
import Profile from 'src/containers/Profile';
import AddPersonTree from 'src/components/Tree/TreeForm/AddPersonTree';
import EditPersonTree from 'src/components/Tree/TreeForm/EditPersonTree';
import About from 'src/containers/Help/About';
import WelcomePage from 'src/containers/WelcomePage';
import UserManual from 'src/containers/Help/UserManual';
import Faq from 'src/containers/Help/FAQ';
import NewFeatures from 'src/containers/Help/NewFeatures';
import Contact from 'src/containers/Help/Contact';
import LegalTerms from 'src/containers/Help/LegalTerms';
import Tree from 'src/containers/Tree';
import Family from 'src/containers/Family';

// == Composant
const App = ({ isLogged, checkConnection, familyId }) => {
  useEffect(() => {
    checkConnection();
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/about" exact>
          <Menu />
          <About />
        </Route>
        <Route path="/UserManual" exact>
          <Menu />
          <UserManual />
        </Route>
        <Route path="/Faq" exact>
          <Menu />
          <Faq />
        </Route>
        <Route path="/NewFeatures" exact>
          <Menu />
          <NewFeatures />
        </Route>
        <Route path="/Contact" exact>
          <Menu />
          <Contact />
        </Route>
        <Route path="/LegalTerms" exact>
          <Menu />
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
              <Route path="/tree/addpersontree" exact>
                <AddPersonTree />
              </Route>
              <Route path="/tree/editpersontree" exact>
                <EditPersonTree />
              </Route>
              <Route path="/family" exact>
                <Family />
              </Route>
              <Route path="/stories" exact>
                <Stories />
              </Route>
              <Route path="/stories/:storyId">
                <StoryDetails />
              </Route>
            </>
            )}
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
