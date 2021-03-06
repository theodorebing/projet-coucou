import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import TextArea from 'src/components/TextArea';

// == Component
const AddStoryForm = ({
  handleAddStory,
  changeField,
  openAddStoryForm,
  title,
  text,
  location,
  startingDate,
  endingDate,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddStory();
  };
  return (
    <div className="addStoryForm addStoryForm-shadow">
      <form method="post" className="form" onSubmit={handleSubmit}>
        <h3 className="addStoryForm-title">Écrivez votre histoire!</h3>
        <Field
          className="addStoryForm-margin"
          name="title"
          placeholder="Titre"
          onChange={changeField}
          value={title}
        />
        <TextArea
          className="addStoryForm-margin"
          name="text"
          type="text"
          placeholder="Texte"
          onChange={changeField}
          value={text}
        />
        <Field
          className="addStoryForm-margin"
          name="location"
          placeholder="Lieu de l'histoire"
          onChange={changeField}
          value={location}
        />
        <Field
          className="addStoryForm-margin"
          name="startingDate"
          placeholder="Date de début de l'histoire"
          onChange={changeField}
          value={startingDate}
        />
        <Field
          className="addStoryForm-margin"
          name="endingDate"
          placeholder="Date de fin de l'histoire"
          onChange={changeField}
          value={endingDate}
        />
        <div className="buttons-div">
          <div className="buttons-div-signup">
            <button type="submit" className="addStoryForm-button-signup button">Ajoutez votre Histoire</button>
          </div>
        </div>
      </form>
      <span className="addStoryForm-link"><a href="#" onClick={openAddStoryForm}>Annuler</a></span>
    </div>
  );
};

AddStoryForm.propTypes = {
  handleAddStory: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  openAddStoryForm: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  location: PropTypes.string,
  startingDate: PropTypes.string,
  endingDate: PropTypes.string,
};

AddStoryForm.defaultProps = {
  title: '',
  text: '',
  location: '',
  startingDate: '',
  endingDate: '',
};

// == Export
export default AddStoryForm;
