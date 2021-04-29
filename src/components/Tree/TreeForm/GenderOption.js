import React from 'react';

const GenderOption = ({ genderName }) => {
  function translateGenderName(name) {
    switch (name) {
      case 'Sélectionner un genre':
        return 'Sélectionner un genre';
      case 'woman':
        return 'Femme';
      case 'man':
        return 'Homme';
      case 'fluid':
        return 'Fluide';
      case 'non binary':
        return 'Non binaire';
      case 'not applicable / I prefer not to say':
        return 'Non applicable / Je préfère ne pas l\'indiquer';
      default:
        return 'Genre inconnu';
    }
  }
  return (
    <>
      <option value={genderName}>{translateGenderName(genderName)}</option>
    </>
  );
};

export default GenderOption;
