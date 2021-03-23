import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StoryText from '../StoryText';

import './styles.scss';

// == Component
const StoryBox = ({
  title,
  text,
  id,
  // location,
  // created_at,
  // starting_date,
  // ending_date,
  // updated_at,
}) => (
  <>
    <Link to={`/stories/${id}`}>
      <div className="story-box fade">
        <h2 className="story-title">{title}</h2>
        <div className="story-box-text">
          {text}
        </div>
      </div>
    </Link>
  </>

);

StoryBox.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number,
  // location: PropTypes.string,
  // created_at: PropTypes.string,
  // starting_date: PropTypes.string,
  // ending_date: PropTypes.string,
  // updated_at: PropTypes.string,
};

StoryBox.defaultProps = {
  title: '',
  text: '',
  id: null,
  // location: '',
  // created_at: '',
  // starting_date: '',
  // ending_date: '',
  // updated_at: '',
};

// == Export
export default StoryBox;
