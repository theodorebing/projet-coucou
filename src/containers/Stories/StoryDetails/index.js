import { connect } from 'react-redux';
import StoryDetails from 'src/components/Stories/StoryDetails';
import { withRouter } from 'react-router-dom';
import { openStoryDetails, fetchStoryDetails, deleteStory } from 'src/actions/stories';
import { findStoryById } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const { params: { storyId } } = ownProps.match;
  const foundStory = findStoryById(state.stories.list, storyId);
  return {
    story: foundStory,
    deleteStoryBool: state.stories.deleteStoryBool,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openStoryDetails: (id) => dispatch(openStoryDetails(id)),
  fetchStoryDetails: () => dispatch(fetchStoryDetails()),
  deleteStory: () => dispatch(deleteStory()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoryDetails));
