import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import FamilyNameTitle from 'src/components/FamilyNameTitle';
import { Link } from 'react-router-dom';

// == Component
const StoryDetails = ({ title, text }) => (
  <div className="storyDetails-page">
    <FamilyNameTitle />
    <div className="storyDetails-box">
      <h2 className="story-title">{title}</h2>
      <p className="storyDetailsText">{text}</p>
      <Link to="/stories">
        <button type="button" className="return"> Retour </button>
      </Link>
    </div>

  </div>
);

StoryDetails.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

StoryDetails.defaultProps = {
  title: '',
  text: '',
};

// == Export
export default StoryDetails;
