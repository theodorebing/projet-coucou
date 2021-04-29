import { connect } from 'react-redux';
import StoryDetails from 'src/components/Stories/StoryDetails';
import { withRouter } from 'react-router-dom';
import { openStoryDetails } from 'src/actions/stories';
import { findStoryById } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const { params: { storyId } } = ownProps.match;
  const foundStory = findStoryById(state.stories.list, storyId);
  return {
    story: foundStory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openStoryDetails: (id) => dispatch(openStoryDetails(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoryDetails));
