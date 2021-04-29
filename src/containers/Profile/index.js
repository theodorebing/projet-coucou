import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import { checkConnection } from 'src/actions/auth';
import { noHelpButtons } from 'src/actions/general';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  name: state.auth.name,
});

const mapDispatchToProps = (dispatch) => ({
  checkConnection: () => dispatch(checkConnection()),
  noHelpButtons: () => dispatch(noHelpButtons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
