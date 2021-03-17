import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import { checkConnection } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  name: state.auth.name,
});

const mapDispatchToProps = (dispatch) => ({
  checkConnection: () => dispatch(checkConnection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
