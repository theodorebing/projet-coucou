import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { sendLogout, checkConnection } from 'src/actions/auth';
import { emptyStories } from 'src/actions/stories';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  familyId: state.family.familyId,
  isLogged: state.auth.isLogged,
  showHelpButtons: state.general.showHelpButtons,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(sendLogout(), emptyStories()),
  checkConnection: () => dispatch(checkConnection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
