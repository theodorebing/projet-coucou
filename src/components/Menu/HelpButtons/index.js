import React from 'react';
import { NavLink } from 'react-router-dom';

const HelpButtons = ({ isLogged }) => (
  <>
    {isLogged && (
    <NavLink to="/" activeClassName="menu-button-onPage">
      <button type="button" className="menu-button menu-button-help">
        Accueil
      </button>
    </NavLink>
    )}
    <NavLink to="/about" activeClassName="menu-button-onPage">
      <button type="button" className="menu-button menu-button-help">
        À propos
      </button>
    </NavLink>
    <NavLink to="/usermanual" activeClassName="menu-button-onPage">
      <button type="button" className="menu-button menu-button-help">
        Mode d'emploi
      </button>
    </NavLink>
    <NavLink to="/faq" activeClassName="menu-button-onPage">
      <button type="button" className="menu-button menu-button-help">
        FAQ
      </button>
    </NavLink>
    <NavLink to="/newfeatures" activeClassName="menu-button-onPage">
      <button type="button" className="menu-button menu-button-help">
        À Venir!
      </button>
    </NavLink>
    <NavLink to="/contact" activeClassName="menu-button-onPage">
      <button type="button" className="menu-button menu-button-help">
        Contact
      </button>
    </NavLink>
    <NavLink to="/legalterms" activeClassName="menu-button-onPage">
      <button type="button" className="menu-button menu-button-help">
        Mentions lég.
      </button>
    </NavLink>
  </>
);

export default HelpButtons;
