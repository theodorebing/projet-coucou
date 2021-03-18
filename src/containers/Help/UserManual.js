import { connect } from 'react-redux';
import UserManual from 'src/components/Help/UserManual';
import { onHelpPages } from 'src/actions/general';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  onHelpPages: () => dispatch(onHelpPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManual);
