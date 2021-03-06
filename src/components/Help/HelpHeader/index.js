// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';


// == Import : local
import './styles.scss';

// == Composant
const HelpHeader = () => (
  <header className="help-header">
    <h1 className="help-header-title">Aide</h1>
    <nav className="help-header-nav">
      <NavLink to={`/help/Faq`} className="help-header-nav-content" activeClassName="menu-button-onPage" exact>FAQ</NavLink>
      <NavLink to={`/help`} className="help-header-nav-content" activeClassName="menu-button-onPage" exact>A propos</NavLink>
      <NavLink to={`/help/NewFeatures`} className="help-header-nav-content" activeClassName="menu-button-onPage">Fonctionnalités à venir</NavLink>
      <NavLink to={`/help/Contact`} className="help-header-nav-content" activeClassName="menu-button-onPage" exact>Contact</NavLink>
      <NavLink to={`/help/UserManual`} className="help-header-nav-content" activeClassName="menu-button-onPage" exact>Mode d'emploi</NavLink>
      <NavLink to={`/help/LegalTerms`} className="help-header-nav-content" activeClassName="menu-button-onPage" exact>Mentions légales</NavLink>
    </nav>
  </header>
);



// == Export
export default HelpHeader;
