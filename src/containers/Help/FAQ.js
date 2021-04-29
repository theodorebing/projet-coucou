import { connect } from 'react-redux';
import FAQ from 'src/components/Help/FAQ';
import { onHelpPages } from 'src/actions/general';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  onHelpPages: () => dispatch(onHelpPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
