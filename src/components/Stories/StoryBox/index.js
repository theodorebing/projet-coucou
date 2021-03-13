import React from 'react';
import PropTypes from 'prop-types';

import StoryText from './StoryText';

import './styles.scss';

// == Component
const StoryBox = ({
  title,
  text,
  // location,
  // created_at,
  // starting_date,
  // ending_date,
  // updated_at,
}) => (
  <div className="storyBox">
    <h2 className="story-title">{title}</h2>
    <StoryText text={text} />
  </div>
);

StoryBox.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  // location: PropTypes.string,
  // created_at: PropTypes.string,
  // starting_date: PropTypes.string,
  // ending_date: PropTypes.string,
  // updated_at: PropTypes.string,
};

StoryBox.defaultProps = {
  title: '',
  text: '',
  // location: '',
  // created_at: '',
  // starting_date: '',
  // ending_date: '',
  // updated_at: '',
};

// == Export
export default StoryBox;
