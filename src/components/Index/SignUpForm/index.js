import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Field from 'src/components/Field';

const SignUpForm = ({
  email,
  password,
  changeField,
  handleSignup,
  openSignUpForm,
  signUpIsOk,
  signUpIsWrong,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignup();
  };

  return (

    <div className="indexsignupform index-shadow">
      {signUpIsOk ? (
        <div className="form">
          <h3 className="indexloginform-title indexloginform-title-green">Félicitations, vous êtes inscrit.e. <br /> Connectez-vous!</h3>
          <span className="indexsignupform-button-signup button"><a href="#" onClick={openSignUpForm}>Retour à la connexion</a></span>
        </div>
      ) : (
        <>
          <form method="post" className="form" onSubmit={handleSubmit}>
            {signUpIsWrong && (
              <h3 className="indexsignupform-title red">Il y a une erreur, réessayez</h3>
            )}
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
        </>
      )}
    </div>

  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  openSignUpForm: PropTypes.func.isRequired,
  signUpIsOk: PropTypes.bool,
  signUpIsWrong: PropTypes.bool,
};
SignUpForm.defaultProps = {
  signUpIsOk: false,
  signUpIsWrong: false,
};

export default SignUpForm;
