import { connect } from 'react-redux';
import StoryDetails from 'src/components/Stories/StoryDetails';
import { withRouter } from 'react-router-dom';
import { openStoryDetails, fetchStoryDetails } from 'src/actions/stories';
import { findStoryById } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  console.log('ownprops', ownProps);
  const { params: { storyId } } = ownProps.match;
  console.log('storyId', storyId);
  const foundStory = findStoryById(state.stories.list, storyId);
  console.log('foundStory', foundStory);
  return {
    story: foundStory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openStoryDetails: (id) => dispatch(openStoryDetails(id)),
  fetchStoryDetails: () => dispatch(fetchStoryDetails()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoryDetails));
