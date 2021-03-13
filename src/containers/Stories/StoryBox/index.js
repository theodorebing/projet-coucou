import { connect } from 'react-redux';
import StoryBox from 'src/components/Stories/StoryBox';
import { openStoryDetails } from 'src/actions/stories';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openStoryDetails: () => dispatch(openStoryDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryBox);
