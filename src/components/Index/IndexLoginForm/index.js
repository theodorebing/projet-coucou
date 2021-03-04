import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const IndexLoginForm = ({
  value,
  type,
  name,
  email,
  password,
  placeholder,
}) => (

  <div className="indexloginform">
    <form method="post" className="form index-shadow">
      <input
        id="mail"
        value={value}
        type="mail"
        className="indexloginform-input"
        placeholder="Adresse e-mail"
        name={name}
      />
      <input
        id="password"
        value={value}
        type="password"
        className="indexloginform-input"
        placeholder="Mot de passe"
        name={name}
      />
      <div className="buttons-div">
        <div className="buttons-div-signin">
          <button type="submit" className="indexloginform-button-signin button">Créer son compte</button>
        </div>

        <div className="buttons-div-login">
          <button type="submit" className="indexloginform-button-login button">Connexion</button>
          <span className="indexloginform-link"><a href="#">Mot de passe oublié ?</a></span>
        </div>
      </div>
    </form>
  </div>

);

IndexLoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
IndexLoginForm.defaultProps = {
  value: '',
  type: 'text',
};

export default IndexLoginForm;
