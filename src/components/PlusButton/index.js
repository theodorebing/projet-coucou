// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import 'src/components/PlusButton/styles.scss';

// == Composant
const PlusButton = ({ openAddForm }) => (
  <div className="plusButton-div">
    <button type="button" className="plusButton-button" onClick={openAddForm}> + </button>
  </div>
);

PlusButton.propTypes = {
  openAddForm: PropTypes.func.isRequired,
};

PlusButton.defaultProps = {

};

// == Export
export default PlusButton;
