import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PlusButton from 'src/components/PlusButton';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import StoryBox from 'src/containers/Stories/StoryBox';
import StoryDetails from 'src/containers/Stories/StoryDetails';
import AddStoryForm from 'src/containers/Stories/AddStoryForm';

import './styles.scss';

// == Composant
const Stories = ({
  stories, fetchStories, activeStoryDetails, openAddStoryForm, activeAddStoryForm,
}) => {
  if (stories) {
    (useEffect(() => {
      fetchStories();
    }, []));
  }
  return (

    <div className="stories">
      <FamilyNameTitle />

      {!activeAddStoryForm && (
      <>
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
        <PlusButton openAddForm={openAddStoryForm} />
      </>
      )}
      {activeAddStoryForm && (
        <AddStoryForm />
      )}
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
  activeAddStoryForm: PropTypes.bool,
  openAddStoryForm: PropTypes.func.isRequired,
};

Stories.defaultProps = {
  stories: null,
  activeStoryDetails: false,
  activeAddStoryForm: false,
};

// == Export
export default Stories;
