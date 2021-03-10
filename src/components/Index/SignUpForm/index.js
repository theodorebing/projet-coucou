import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Field from 'src/components/Field';

const SignUpForm = ({
  email,
  password,
  changeField,
  handleLogin,
  openSignUpForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (

    <div className="indexsignupform index-shadow">

      <form method="post" className="form" onSubmit={handleSubmit}>
        <h3 className="indexsignupform-title">Inscrivez-vous!</h3>
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
            <button type="submit" className="indexsignupform-button-signup button">Valider l'inscription</button>
          </div>
        </div>
      </form>
      <span className="indexsignupform-link"><a href="#" onClick={openSignUpForm}>Retour à la connexion</a></span>
    </div>

  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  openSignUpForm: PropTypes.func.isRequired,
};
SignUpForm.defaultProps = {
};

export default SignUpForm;
