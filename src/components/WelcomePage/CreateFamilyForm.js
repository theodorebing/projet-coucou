import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Field from 'src/components/Field';

const NewFamilyForm = ({ designation, changeField, handleCreateFamily }) => {
  const handleSubmitCreateFamily = (evt) => {
    evt.preventDefault();
    handleCreateFamily();
  };
  return (
    <div className="form__family">
      <h2>Ou créer une nouvelle famille sur Coucou!</h2>
      <form method="post" className="form" onSubmit={handleSubmitCreateFamily}>
        <Field
          name="designation"
          placeholder="Quel est le nom de votre famille?"
          onChange={changeField}
          value={designation}
        />
        <button type="submit" className="indexloginform-button-login">Créer</button>
      </form>
    </div>
  );
};

NewFamilyForm.propTypes = {
  designation: PropTypes.string,
  handleCreateFamily: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

NewFamilyForm.defaultProps = {
  designation: '',
};

export default NewFamilyForm;
