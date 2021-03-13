import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

// == Component
const StoryDetails = ({ title, text }) => (
  <div className="storyDetails">
    <h2 className="story-title">{title}</h2>
    <p className="storyDetailsText">{text}</p>
  </div>
);

StoryDetails.propTypes = {

};

StoryDetails.defaultProps = {

};

// == Export
export default StoryDetails;
