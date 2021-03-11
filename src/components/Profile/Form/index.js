
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Field from './FieldInput';
import FieldArea from './FieldArea';

const ProfileForm = ({
  email,
  password,
  changeField,
  familyName,
  firstName,
  pseudo,
  description,
  handleValidate,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("form validé")
    handleValidate()
  };

  return (
    <>
      <h1 className="profile-container-innerElements-titre">Coucou {email}!</h1>
      <form method="post" className="profile-container-innerElements-form" onSubmit={handleSubmit}>

        <Field
          name="familyName"
          placeholder="Votre nom"
          className="profile-container-innerElements-familyName"
          onChange={changeField}
          value={familyName}
        />

        <Field
          name="firstName"
          type="text"
          placeholder="Votre nom"
          className="profile-container-innerElements-firstName"
          onChange={changeField}
          value={firstName}
        />

        <Field
          name="pseudo"
          type="text"
          placeholder="Votre nom"
          className="profile-container-innerElements-pseudo"
          onChange={changeField}
          value={pseudo}
        />

        <Field
          name="email"
          type="email"
          placeholder="Votre nom"
          className="profile-container-innerElements-email"
          onChange={changeField}
          value={email}
        />

        <Field
          name="password"
          type="password"
          placeholder="Votre nom"
          className="profile-container-innerElements-password"
          onChange={changeField}
          value={password}
        />

        <FieldArea
          name="description"
          placeholder="Votre nom"
          onChange={changeField}
          value={description}
          className="profile-container-innerElements-description"
        />

        <div className="profile-container-innerElements-validate">
          <button type="submit" className="profile-container-innerElements-form-validate-button">Validez vos changements</button>
        </div>
      </form>
    </>
  );
};

ProfileForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func,
  handleLogin: PropTypes.func,
  handleValidate: PropTypes.func,
};


export default ProfileForm;
