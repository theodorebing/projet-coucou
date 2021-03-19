import { connect } from 'react-redux';
import Family from 'src/components/Family';
import { noHelpButtons } from 'src/actions/general';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  noHelpButtons: () => dispatch(noHelpButtons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Family);
