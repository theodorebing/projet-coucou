// == Import : npm
import React from 'react';

// == Import : local
import './style.scss';

// == Composant
const Header = () => (
  <header className="help-header">
    <h1 className="help-header-title">Aide</h1>
    <nav className="help-header-nav">
      <a href="#" className="help-header-nav-content">FAQ</a>
      <a href="#" className="help-header-nav-content">A propos</a>
      <a href="#" className="help-header-nav-content">Fonctionnalités à venir</a>
      <a href="#" className="help-header-nav-content">Contact</a>
      <a href="#" className="help-header-nav-content">Mode d'emploi</a>
    </nav>
  </header>
);



// == Export
export default Header;
