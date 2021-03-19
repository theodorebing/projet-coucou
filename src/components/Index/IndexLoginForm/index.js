import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Field from 'src/components/Field';

const IndexLoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  openSignUpForm,
  signUpIsOk,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  console.log('signUpIsOk', signUpIsOk);
  return (
    <div className="indexloginform index-shadow">
      {changeField ? (
        <>
          <form method="post" className="form" onSubmit={handleSubmit}>
            {signUpIsOk ? (
              <h3 className="indexloginform-title indexloginform-title-green">Félicitations, vous êtes inscrit.e. <br /> Connectez-vous!</h3>
            ) : (<h3 className="indexloginform-title">Connectez-vous!</h3>)}
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
        </>
      ) : (<h2 className="story-title">Loading</h2>)}
    </div>
  );
};

IndexLoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  openSignUpForm: PropTypes.func.isRequired,
  signUpIsOk: PropTypes.bool,
};
IndexLoginForm.defaultProps = {
  signUpIsOk: false,
};

export default IndexLoginForm;
