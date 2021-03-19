import React from 'react';

const PeopleOption = ({ id, firstName, lastName }) => {
  console.log('people names', firstName, lastName);
  return (
    <>
      <option value={id}>{firstName} {lastName}</option>
    </>
  );
};
export default PeopleOption;
