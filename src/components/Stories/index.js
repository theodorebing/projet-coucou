import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PlusButton from 'src/components/PlusButton';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import StoryBox from 'src/components/Stories/StoryBox';
import './styles.scss';

// == Composant
const Stories = ({ stories, fetchStories }) => {
  if (stories) {
    (useEffect(() => {
      fetchStories();
    }, []));
  }
  return (
    <div className="stories-div">
      <FamilyNameTitle />
      {stories && (
      <div className="stories-feed">
        {stories.map((story) => (
          <StoryBox key={story.id} {...story} />
        ))}
      </div>
      )}
      <PlusButton />
    </div>
  );
};

Stories.propTypes = {
  fetchStories: PropTypes.func,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Stories.defaultProps = {
  fetchStories: null,
  stories: null,
};

// == Export
export default Stories;
