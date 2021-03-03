// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Menu from 'src/components/Menu';
import Content from 'src/components/Content';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Content />
  </div>
);

// == Export
export default App;
