import React from 'react';
import PropTypes from 'prop-types';

import StoryText from './StoryText';

import './styles.scss';

// == Component
const StoryBox = ({ stories }) => (
  <div className="storyBox fade">
    <StoryText story={stories} />
  </div>
);

StoryBox.propTypes = {
  stories: PropTypes.string,
};

StoryBox.defaultProps = {
  stories: '',
};

// == Export
export default StoryBox;
