import React from 'react';

const GenderOption = ({ genderName }) => (
  <>
    <option value={genderName}>{genderName}</option>
  </>
);

export default GenderOption;
