import { connect } from 'react-redux';
import SignUpForm from 'src/components/Index/SignUpForm';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
