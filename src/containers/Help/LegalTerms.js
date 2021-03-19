import { connect } from 'react-redux';
import LegalTerms from 'src/components/Help/LegalTerms';
import { onHelpPages } from 'src/actions/general';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  onHelpPages: () => dispatch(onHelpPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LegalTerms);
