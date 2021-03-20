import { connect } from 'react-redux';
import SignUpForm from 'src/components/Index/SignUpForm';
import { setFieldValue, sendFieldValueSignup, openSignUpForm } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  signUpIsWrong: state.auth.signUpIsWrong,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  openSignUpForm: () => dispatch(openSignUpForm()),
  handleSignup: () => dispatch(sendFieldValueSignup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
