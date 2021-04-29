import React from 'react';
import { NavLink } from 'react-router-dom';

const HelpButtons = ({ isLogged }) => (
  <>
    {!isLogged && (
    <NavLink exact to="/" activeClassName="menu-button-onPage" className="menu-button menu-button-help">
      Accueil
    </NavLink>
    )}
    <NavLink to="/about" className="menu-button menu-button-help" activeClassName="menu-button-onPage">
      À propos
    </NavLink>
    <NavLink to="/usermanual" activeClassName="menu-button-onPage" className="menu-button menu-button-help">
      Mode d'emploi
    </NavLink>
    <NavLink to="/faq" activeClassName="menu-button-onPage" className="menu-button menu-button-help">
      FAQ
    </NavLink>
    <NavLink to="/newfeatures" activeClassName="menu-button-onPage" className="menu-button menu-button-help">
      À Venir!
    </NavLink>
    <NavLink to="/contact" activeClassName="menu-button-onPage" className="menu-button menu-button-help">
      Contact
    </NavLink>
    <NavLink to="/legalterms" activeClassName="menu-button-onPage" className="menu-button menu-button-help">
      Mentions lég.
    </NavLink>
  </>
);

export default HelpButtons;
