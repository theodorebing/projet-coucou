import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { sendLogout, checkConnection } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  familyId: state.family.familyId,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(sendLogout()),
  checkConnection: () => dispatch(checkConnection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
