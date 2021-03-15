import { connect } from 'react-redux';
import StoryDetails from 'src/components/Stories/StoryDetails';
import { openStoryDetails } from 'src/actions/stories';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openStoryDetails: (id) => dispatch(openStoryDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetails);
