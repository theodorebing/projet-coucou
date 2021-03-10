import { connect } from 'react-redux';
import SignUpForm from 'src/components/Index/SignUpForm';
import { setFieldValue, sendFieldValue, openSignUpForm } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  openSignUpForm: () => dispatch(openSignUpForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
