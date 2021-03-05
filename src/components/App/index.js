// == Import npm
import React from 'react';
import Help from '../Help';

// == Import
import './styles.scss';
import Menu from 'src/components/Menu';
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

// == Export
export default App;
