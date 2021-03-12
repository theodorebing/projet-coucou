import { connect } from 'react-redux';
import Stories from 'src/components/Stories';
import {fetchStories} from 'src/actions/stories';

const mapStateToProps = (state) => ({
  stories: state.stories.list,
});

const mapDispatchToProps = (dispatch) => {
  fetchStories: () => dispatch(fetchStories()),
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
