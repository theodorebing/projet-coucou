import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkConnection } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  familyId: state.family.familyId,
});

const mapDispatchToProps = (dispatch) => ({
  checkConnection: () => dispatch(checkConnection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
