import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

// == Component
const StoryText = ({ story }) => (
  <div className="storyText">
    {story}
  </div>
);

StoryText.propTypes = {
  story: PropTypes.string,
};

StoryText.defaultProps = {
  story: '',
};

// == Export
export default StoryText;
