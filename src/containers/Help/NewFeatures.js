import { connect } from 'react-redux';
import NewFeatures from 'src/components/Help/NewFeatures';
import { onHelpPages } from 'src/actions/general';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  onHelpPages: () => dispatch(onHelpPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFeatures);
