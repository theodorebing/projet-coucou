// == Import
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/Logo-Coucou-transparent.png';
import './style.scss';
import PropTypes from 'prop-types';
import HelpButtons from './HelpButtons';

// == Menu component
const Menu = ({
  handleLogout,
  email,
  checkConnection,
  familyId,
  isLogged,
  showHelpButtons,
}) => {
  useEffect(() => {
    checkConnection();
  }, []);
  return (
    <div className="menu">
      <div className="menu-header">
        <NavLink to="/">
          <div className="menu-logo-div">
            <img src={logo} alt="Logo" className="menu-logo" />
            <span className="menu-logo-text">Coucou !</span>
          </div>
        </NavLink>
        {/* <div className="menu-username"> {email} </div> */}
        {isLogged && (
          <NavLink to="/">
            <button type="button" className="menu-littleButton menu-littleButton-disconnect" onClick={handleLogout}> Me déconnecter </button>
          </NavLink>
        )}

      </div>
      <div className="spacearound">
        {showHelpButtons && (
        <>
          <div className="menu-button-helplist">
            <HelpButtons />
          </div>
        </>
        )}
        <div className="menu-button-list">

          {isLogged && (
          <>
            <NavLink to="/profile" activeClassName="menu-button-onPage">
              <button type="button" className="menu-button">Mon profil</button>
            </NavLink>
          </>
          )}
          { isLogged && (typeof familyId === 'number') && (
          <>
            <NavLink to="/family" activeClassName="menu-button-onPage">
              <button type="button" className="menu-button">
                Ma famille
              </button>
            </NavLink>

            <NavLink to="/tree" activeClassName="menu-button-onPage">
              <button type="button" className="menu-button">
                Arbre
              </button>
            </NavLink>

            <NavLink to="/stories" activeClassName="menu-button-onPage">
              <button type="button" className="menu-button">
                Histoires
              </button>
            </NavLink>
          </>
          )}
        </div>
      </div>
      {isLogged && !showHelpButtons && (
        <div className="menu-button-helpdiv">
          <NavLink to="/about" activeClassName="menu-button-onPage">
            <button type="button" className="menu-littleButton menu-littleButton-help">
              Aide
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

Menu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  checkConnection: PropTypes.func.isRequired,
  email: PropTypes.string,
  familyId: PropTypes.number,
  isLogged: PropTypes.bool,
  showHelpButtons: PropTypes.bool,
};

Menu.defaultProps = {
  email: '',
  familyId: null,
  isLogged: false,
  showHelpButtons: false,
};

export default Menu;
