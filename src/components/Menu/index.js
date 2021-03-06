// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'src/assets/Logo-Coucou-transparent.png';

// == Import
import './style.scss';

// == Composant
const Menu = () => (
  <div className="menu">
    <div className="menu-header">
      <div className="menu-logo-div">
        <img src={logo} alt="Logo" className="menu-logo" />
        <span className="menu-logo-text">Coucou !</span>
      </div>
      <div className="menu-username"> Geneviève <br /> Grandchamp-Larrieux </div>
      <button type="button" className="menu-littleButton menu-littleButton-disconnect"> Me déconnecter </button>
    </div>

    <div className="menu-button-list">
      <button type="button" className="menu-button"><NavLink to={`/profile`} activeClassName="menu-button-onPage">Mon profil</NavLink> </button>

      <button type="button" className="menu-button"> <NavLink to={`/family`} activeClassName="menu-button-onPage">Ma famille</NavLink>  </button>

      <button type="button" className="menu-button"> <NavLink to={`/tree`} activeClassName="menu-button-onPage">Arbre</NavLink> </button>

      <button type="button" className="menu-button"> <NavLink to={`/stories`} activeClassName="menu-button-onPage">Histoires</NavLink> </button>
    </div>

    <div className="menu-button-help">
      <button type="button" className="menu-littleButton menu-littleButton-help"> <NavLink to={`/help`} activeClassName="menu-button-onPage">Aide</NavLink> </button>
    </div>

  </div>
);

// == Export
export default Menu;