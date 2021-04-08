import { connect } from 'react-redux';
import AddPersonTree from 'src/components/Tree/TreeForm/AddPersonTree';

const mapStateToProps = (state) => ({
  familyId: state.family.familyId,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonTree);
