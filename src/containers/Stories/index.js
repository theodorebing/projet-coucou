import { connect } from 'react-redux';
import Stories from 'src/components/Stories';
import { fetchStories, openAddStoryForm } from 'src/actions/stories';

const mapStateToProps = (state) => ({
  stories: state.stories.list,
  activeStoryDetails: state.stories.activeStoryDetails,
  activeAddStoryForm: state.stories.activeAddStoryForm,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories()),
  openAddStoryForm: () => dispatch(openAddStoryForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
