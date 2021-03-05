import { connect } from 'react-redux';
import IndexLoginForm from 'src/components/Index/IndexLoginForm';
import { setFieldValue, sendFieldValue, logout } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  pseudo: state.auth.pseudo,
  favorites: state.auth.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleLogin: () => dispatch(sendFieldValue()),
  handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexLoginForm);
