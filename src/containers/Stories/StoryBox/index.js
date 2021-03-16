import { connect } from 'react-redux';
import StoryBox from 'src/components/Stories/StoryBox';
import { openStoryDetails } from 'src/actions/stories';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openStoryDetails: (id) => dispatch(openStoryDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryBox);
