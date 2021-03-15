import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';

// == Component
const AddStoryForm = ({
  handleSubmit, changeField, email, password, openAddStoryForm,
}) => (
  <div className="addStoryForm">
    <form method="post" className="form" onSubmit={handleSubmit}>
      <h3 className="addStoryForm-title">Écrivez votre histoire!</h3>
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
    <span className="indexsignupform-link"><a href="#" onClick={openAddStoryForm}>Retour à la connexion</a></span>
  </div>
);

AddStoryForm.propTypes = {

};

AddStoryForm.defaultProps = {

};

// == Export
export default AddStoryForm;
