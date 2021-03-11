import { connect } from 'react-redux';
import JoinFamilyForm from 'src/components/WelcomePage/JoinFamilyForm';
import { setFieldValue, sendFieldValue } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  code: state.auth.code,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleJoin: () => dispatch(sendFieldValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinFamilyForm);
