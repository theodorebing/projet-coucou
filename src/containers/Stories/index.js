import { connect } from 'react-redux';
import Stories from 'src/components/Stories';
import { fetchStories, openAddStoryForm } from 'src/actions/stories';
import { noHelpButtons } from 'src/actions/general';

const mapStateToProps = (state) => ({
  stories: state.stories.list,
  activeStoryDetails: state.stories.activeStoryDetails,
  activeAddStoryForm: state.stories.activeAddStoryForm,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories()),
  openAddStoryForm: () => dispatch(openAddStoryForm()),
  noHelpButtons: () => dispatch(noHelpButtons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
