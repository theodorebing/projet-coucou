import { connect } from 'react-redux';
import IndexLoginForm from 'src/components/Index/IndexLoginForm';
import { setFieldValue, sendFieldValue, openSignUpForm } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleLogin: () => dispatch(sendFieldValue()),
  openSignUpForm: () => dispatch(openSignUpForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexLoginForm);
