// == Import
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/images/Logo-Coucou-transparent.png';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const openResponsiveMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    else {
      setMenuOpen(true);
    }
  };
  // {classNames( {'menu-littleButton menu-littleButton-responsive': responsiveMenuIsOpen })}
  // {classNames( '' { '': responsiveMenu })}
  useEffect(() => {
    checkConnection();
  }, []);
  console.log(window.screen.width);
  return (
    <div className="menu menu-responsive">
      {(window.screen.width <= 768) && (
      <div className="menu-header">
        <button className="menu-littleButton menu-littleButton-responsive-menu" type="button" onClick={openResponsiveMenu}>
          Menu
        </button>
        <NavLink to="/">
          {/* <img src={logo} alt="Logo" className="menu-logo" /> */}
          <span className="menu-logo-text">Coucou !</span>
        </NavLink>
        {/* <div className="menu-username"> {email} </div> */}
        {isLogged && (
        <NavLink to="/">
          <button type="button" className="menu-littleButton menu-littleButton-disconnect" onClick={handleLogout}> Déconnexion </button>
        </NavLink>
        )}
      </div>

      )}
      {(window.screen.width <= 768) && menuOpen ? (
        <div className="responsive-menu">
          <div className="spacearound">
            {showHelpButtons && (
            <>
              <div className="menu-button-helplist">
                <HelpButtons />
              </div>
            </>
            )}
            <div className="menu-button-list">
              { isLogged && (typeof familyId === 'number') && (
              <>
                <NavLink to="/tree" className="menu-button" activeClassName="menu-button-onPage">
                  Arbre
                </NavLink>

                <NavLink to="/stories" className="menu-button" activeClassName="menu-button-onPage">
                  Histoires
                </NavLink>
              </>
              )}
              {isLogged && (
              <>
                <NavLink to="/profile" className="menu-button" activeClassName="menu-button-onPage">
                  Mon profil
                </NavLink>
              </>
              )}
              { isLogged && (typeof familyId === 'number') && (
              <>
                <NavLink to="/family" className="menu-button" activeClassName="menu-button-onPage">
                  Ma famille
                </NavLink>
              </>
              )}
            </div>
          </div>
          {isLogged && !showHelpButtons && (
          <div className="menu-littleButton-helpdiv">
            <NavLink to="/about" className="menu-littleButton menu-littleButton-help" activeClassName="menu-button-onPage">
              Aide
            </NavLink>
          </div>
          )}
        </div>
      ) : (
        null
      )}

      {(window.screen.width > 768) ? (
        <>
          <div className="menu-header">
            <NavLink to="/">
              <div className="menu-logo-div">
                {/* <img src={logo} alt="Logo" className="menu-logo" /> */}
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
              { isLogged && (typeof familyId === 'number') && (
              <>
                <NavLink to="/tree" className="menu-button" activeClassName="menu-button-onPage">
                  Arbre
                </NavLink>

                <NavLink to="/stories" className="menu-button" activeClassName="menu-button-onPage">
                  Histoires
                </NavLink>
              </>
              )}
              {isLogged && (
              <>
                <NavLink to="/profile" className="menu-button" activeClassName="menu-button-onPage">
                  Mon profil
                </NavLink>
              </>
              )}
              { isLogged && (typeof familyId === 'number') && (
              <>
                <NavLink to="/family" className="menu-button" activeClassName="menu-button-onPage">
                  Ma famille
                </NavLink>
              </>
              )}
            </div>
          </div>
          {isLogged && !showHelpButtons && (
          <div className="menu-littleButton-helpdiv">
            <NavLink to="/about" className="menu-littleButton menu-littleButton-help" activeClassName="menu-button-onPage">
              Aide
            </NavLink>
          </div>

          )}
        </>
      )
        : (
          null
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
