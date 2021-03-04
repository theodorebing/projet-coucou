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
    <form method="post" className="form">
      <input
        id="mail"
        value={value}
        type="mail"
        className="indexloginform-input"
        placeholder="identifiant"
        name={name}
      />
      <input
        id="password"
        value={value}
        type="password"
        className="indexloginform-input"
        placeholder="mot de passe"
        name={name}
      />
      <button type="submit" className="indexloginform-button-login" type="submit">Connexion</button>
      <span className="indexloginform-link"><a href="#">Mot de passe oublié ?</a></span>
      <button className="indexloginform-button-signin" type="submit">Créer son compte</button>
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
