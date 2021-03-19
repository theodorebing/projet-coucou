import { connect } from 'react-redux';
import HelpButtons from 'src/components/Menu/HelpButtons';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpButtons);
