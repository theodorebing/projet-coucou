import React from 'react';
import logo from 'src/assets/Logo-Coucou-transparent.png';
import './style.scss';
import PropTypes from 'prop-types';

// == Composant
const Menu = ({ handleLogout }) => (
  <div className="menu">
    <div className="menu-header">
      <div className="menu-logo-div">
        <img src={logo} alt="Logo" className="menu-logo" />
        <span className="menu-logo-text">Coucou !</span>
      </div>
      <div className="menu-username"> Geneviève <br /> Grandchamp-Larrieux </div>
      <button type="button" className="menu-littleButton menu-littleButton-disconnect" onClick={handleLogout}> Me déconnecter </button>
    </div>

    <div className="menu-button-list">
      <button type="button" className="menu-button menu-button-onPage"> Mon profil </button>

      <button type="button" className="menu-button"> Ma famille </button>

      <button type="button" className="menu-button"> Arbre </button>

      <button type="button" className="menu-button"> Histoires </button>
    </div>

    <div className="menu-button-help">
      <button type="button" className="menu-littleButton menu-littleButton-help"> Aide </button>
    </div>

  </div>
);

Menu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

// == Export
export default Menu;
