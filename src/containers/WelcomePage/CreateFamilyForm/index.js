import { connect } from 'react-redux';
import CreateFamilyForm from 'src/components/WelcomePage/CreateFamilyForm';
import { setFieldValue } from 'src/actions/auth';
import { sendFamilyNameValue } from 'src/actions/family';

const mapStateToProps = (state) => ({
  designation: state.family.designation,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  handleCreateFamily: () => dispatch(sendFamilyNameValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateFamilyForm);
