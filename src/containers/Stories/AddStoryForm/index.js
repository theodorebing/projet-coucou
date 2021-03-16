import { connect } from 'react-redux';
import AddStoryForm from 'src/components/Stories/AddStoryForm';
import { openAddStoryForm, addStory } from 'src/actions/stories';
import { setFieldValue } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  title: state.stories.title,
  text: state.stories.text,
  location: state.stories.location,
  startingDate: state.stories.startingDate,
  endingDate: state.stories.endingDate,
});

const mapDispatchToProps = (dispatch) => ({
  openAddStoryForm: () => dispatch(openAddStoryForm()),
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleAddStory: () => dispatch(addStory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStoryForm);
