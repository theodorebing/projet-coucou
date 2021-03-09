import { connect } from 'react-redux';
import IndexLoginForm from 'src/components/Index/IndexLoginForm';
import { setFieldValue, sendFieldValue } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleLogin: () => dispatch(sendFieldValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexLoginForm);
