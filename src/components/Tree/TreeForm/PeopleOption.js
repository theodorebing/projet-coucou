import React from 'react';

const PeopleOption = ({ id, firstName, lastName }) => {
  return (
    <>
      <option value={id}>{firstName} {lastName}</option>
    </>
  );
};
export default PeopleOption;
