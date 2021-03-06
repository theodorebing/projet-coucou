import { connect } from 'react-redux';
import Tree from 'src/components/Tree';
import { noHelpButtons } from 'src/actions/general';

const mapStateToProps = (state) => ({
  familyId: state.family.familyId,
});

const mapDispatchToProps = (dispatch) => ({
  noHelpButtons: () => dispatch(noHelpButtons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
