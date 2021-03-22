import React, { useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PropTypes from 'prop-types';

import PlusButton from 'src/components/PlusButton';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import StoryBox from 'src/containers/Stories/StoryBox';
import AddStoryForm from 'src/containers/Stories/AddStoryForm';

import './styles.scss';

// == Composant
const Stories = ({
  stories, fetchStories, openAddStoryForm, activeAddStoryForm, noHelpButtons,
}) => {
  if (stories) {
    (useEffect(() => {
      noHelpButtons();
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
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 700: 1, 1200: 2, 1800: 3 }}
                >
                  <Masonry columnsCount={3}>
                    {stories.map((story) => (
                      <StoryBox key={story.id} {...story} />
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            ) : (
              <h2 className="stories-loading">Loading</h2>
            )}

          </div>
          <PlusButton openAddForm={openAddStoryForm} />
        </>
      )}
      {activeAddStoryForm && (
      <div className="center-addStoryForm">
        <AddStoryForm />
      </div>
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
