import { connect } from 'react-redux';
import WelcomePage from 'src/components/WelcomePage';
import { noHelpButtons } from 'src/actions/general';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  noHelpButtons: () => dispatch(noHelpButtons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
