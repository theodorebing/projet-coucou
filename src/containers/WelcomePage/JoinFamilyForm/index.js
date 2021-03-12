import { connect } from 'react-redux';
import JoinFamilyForm from 'src/components/WelcomePage/JoinFamilyForm';
import { setFieldValue } from 'src/actions/auth';
import { sendCodeValue } from 'src/actions/family';

const mapStateToProps = (state) => ({
  code: state.family.code,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleJoin: () => dispatch(sendCodeValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinFamilyForm);
