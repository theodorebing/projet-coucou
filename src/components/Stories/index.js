import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PlusButton from 'src/components/PlusButton';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import StoryBox from 'src/containers/Stories/StoryBox';
import './styles.scss';

// == Composant
const Stories = ({ stories, fetchStories }) => {
  if (stories) {
    (useEffect(() => {
      fetchStories();
    }, []));
  }
  return (
    <div className="stories">
      <FamilyNameTitle />
      <div className="stories-div">
        {stories && (
          <div className="stories-feed">
            {stories.map((story) => (
              <StoryBox key={story.id} {...story} />
            ))}
          </div>
        )}

      </div>
      <PlusButton />
    </div>
  );
};

Stories.propTypes = {
  fetchStories: PropTypes.func.isRequired,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Stories.defaultProps = {
  stories: null,
};

// == Export
export default Stories;
