import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

// == Component
const StoryDetails = ({ title, text, openStoryDetails }) => (
  <div className="storyDetails">
    <h2 className="story-title">{title}</h2>
    <p className="storyDetailsText">{text}</p>
    <button type="button" className="return" onClick={openStoryDetails}> Retour </button>
  </div>
);

StoryDetails.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  openStoryDetails: PropTypes.bool,
};

StoryDetails.defaultProps = {
  title: '',
  text: '',
  openStoryDetails: false,
};

// == Export
export default StoryDetails;
