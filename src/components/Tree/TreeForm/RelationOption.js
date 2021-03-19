import React from 'react';

const RelationOption = ({ id, type }) => (
  <>
    <option value={id}>{type}</option>
  </>
);

export default RelationOption;
