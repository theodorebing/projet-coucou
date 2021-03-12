import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// == Component
const FamilyNameTitle = ({ familyName }) => (
  <>
    <h1 className="familyNameTitle">{familyName}</h1>
  </>
);

FamilyNameTitle.propTypes = {
  familyName: PropTypes.string,
};

FamilyNameTitle.defaultProps = {
  familyName: 'familyName',
};

// == Export
export default FamilyNameTitle;
