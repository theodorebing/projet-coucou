import { connect } from 'react-redux';
import Contact from 'src/components/Help/Contact';
import { onHelpPages } from 'src/actions/general';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  onHelpPages: () => dispatch(onHelpPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
