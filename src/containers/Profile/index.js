import { connect } from 'react-redux';
import ProfileForm from 'src/components/Profile/Form';
import { setFieldValue, sendFieldValue } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  isLogged: state.auth.isLogged,
  // pseudo: state.auth.pseudo,
  // favorites: state.auth.favorites,
  // familyName: state.auth.familyName,
  familyId: state.auth.familyId,
  // firstName: state.auth.firstName,
  // description: state.auth.description,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
  // handleValidate: () => dispatch(sendFieldValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
