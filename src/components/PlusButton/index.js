// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const PlusButton = ({ openAddForm }) => (
  <button type="button" className="plusButton-button" onClick={openAddForm}> + </button>
);

PlusButton.propTypes = {
  openAddForm: PropTypes.func,
};

PlusButton.defaultProps = {
  openAddForm: null,
};

// == Export
export default PlusButton;
