import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PlusButton from 'src/components/PlusButton';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import StoryBox from 'src/containers/Stories/StoryBox';
import StoryDetails from './StoryDetails';

import './styles.scss';

// == Composant
const Stories = ({ stories, fetchStories, activeStoryDetails }) => {
  console.log(stories);
  if (stories) {
    (useEffect(() => {
      fetchStories();
    }, []));
  }
  return (
    <div className="stories">
      <FamilyNameTitle />
      <div className="stories-div">
        {activeStoryDetails && (
        <>
          <StoryDetails />
        </>
        )}
        {!activeStoryDetails && stories && (
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
  activeStoryDetails: PropTypes.bool,

};

Stories.defaultProps = {
  stories: null,
  activeStoryDetails: false,
};

// == Export
export default Stories;
