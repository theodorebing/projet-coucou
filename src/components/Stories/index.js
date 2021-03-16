import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PlusButton from 'src/components/PlusButton';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import StoryBox from 'src/containers/Stories/StoryBox';
import AddStoryForm from 'src/containers/Stories/AddStoryForm';

import './styles.scss';

// == Composant
const Stories = ({
  stories, fetchStories, openAddStoryForm, activeAddStoryForm,
}) => {
  if (stories) {
    (useEffect(() => {
      setTimeout(() => {
        fetchStories();
      }, 500);
    }, []));
  }
  return (

    <div className="stories">
      <FamilyNameTitle />
      {!activeAddStoryForm && (
      <>
        <div className="stories-div">
          {Object.keys(stories).length ? (
            <div className="stories-feed">
              {stories.map((story) => (
                <StoryBox key={story.id} {...story} />
              ))}
            </div>
          ) : (
            <h2 className="stories-loading">Loading</h2>
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
  activeAddStoryForm: PropTypes.bool,
  openAddStoryForm: PropTypes.func.isRequired,
};

Stories.defaultProps = {
  stories: null,
  activeAddStoryForm: false,
};

// == Export
export default Stories;
