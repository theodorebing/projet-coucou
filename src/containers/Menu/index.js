import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { sendLogout } from 'src/actions/auth';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(sendLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
