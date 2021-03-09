import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Field from './Field';

const IndexLoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
  openSignUpForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (

    <div className="indexloginform index-shadow">
      <form method="post" className="form" onSubmit={handleSubmit}>
        <Field
          name="email"
          placeholder="Adresse e-mail"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <div className="buttons-div">

          <div className="buttons-div-login">
            <button type="submit" className="indexloginform-button-login button">Connexion</button>
            <span className="indexloginform-link"><a href="#">Mot de passe oublié ?</a></span>
          </div>
        </div>
      </form>
      <div className="buttons-div-signup">
        <button type="submit" className="indexloginform-button-signup button" onClick={openSignUpForm}>Créer son compte</button>
      </div>

    </div>

  );
};

IndexLoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  openSignUpForm: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};
IndexLoginForm.defaultProps = {
  isLogged: false,
};

export default IndexLoginForm;
