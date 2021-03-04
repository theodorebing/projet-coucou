// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Menu from 'src/components/Menu';
// import Content from 'src/components/Content';
import Index from 'src/components/Index';
import WelcomePage from '../WelcomePage';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <WelcomePage/>
    {/* 
      <Index />
    <Content /> */}
  </div>
);

// == Export
export default App;
