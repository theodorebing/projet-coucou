import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { logout } from 'src/actions/auth';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
