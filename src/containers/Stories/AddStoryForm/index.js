import { connect } from 'react-redux';
import AddStoryForm from 'src/components/Stories/AddStoryForm';
import { openAddStoryForm } from 'src/actions/stories';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  openAddStoryForm: () => dispatch(openAddStoryForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStoryForm);
