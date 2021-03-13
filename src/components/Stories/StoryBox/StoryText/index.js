import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

// == Component
const StoryText = ({ text }) => {
  console.log('text in storyText', text);
  return (
    <div className="storyText">
      {text}
    </div>
  );
};

StoryText.propTypes = {
  text: PropTypes.string,
};

StoryText.defaultProps = {
  text: '',
};

// == Export
export default StoryText;
