// == Import : npm
import React from 'react';

// == Import : local
import './style.scss';

// == Composant
const Header = () => (
  <header className="userManual-header">
    <h1 className="userManual-header-title">Mode d'emploi</h1>
    <nav className="userManual-header-section">
      <h2 className="userManual-header-section-title">sommaire</h2>
      <a href="#1" className="userManual-header-section-content">1. Comment créer un compte</a>
      <a href="#2" className="userManual-header-section-content">2. Comment créer un groupe</a>
      <a href="#3" className="userManual-header-section-content">3. Comment rajouter des personnes à l'arbre</a>
      <a href="#4" className="userManual-header-section-content">4. Comment créer une Histoire</a>
    </nav>
  </header>
);



// == Export
export default Header;
