import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Field from '../IndexLoginForm/Field';

const SignUpForm = ({
  email,
  password,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (

    <div className="indexsignupform index-shadow">
      <h3 className="signup-title">Inscrivez-vous!</h3>
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

          <div className="buttons-div-signup">
            <button type="submit" className="indexsignupform-button-signup button">Connexion</button>
            <span className="indexsignupform-link"><a href="#">Mot de passe oublié ?</a></span>
          </div>
        </div>
      </form>
    </div>

  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
SignUpForm.defaultProps = {
};

export default SignUpForm;
