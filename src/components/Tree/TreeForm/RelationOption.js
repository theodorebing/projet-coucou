import React from 'react';

const RelationOption = ({ id, type }) => {
  function translateRelationType(name) {
    switch (name) {
      case 'Sélectionnez une relation':
        return 'Sélectionnez une relation';
      case 'child of':
        return 'Enfant de';
      case 'parent of':
        return 'Parent de';
      case 'married to':
        return 'Marié à';
      default:
        return 'Relation inconnue';
    }
  }

  return (
    <>
      <option value={id}>{translateRelationType(type)}</option>
    </>
  );
};
export default RelationOption;
