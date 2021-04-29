import { connect } from 'react-redux';
import Index from 'src/components/Index';

const mapStateToProps = (state) => ({
  activeSignUpForm: state.auth.activeSignUpForm,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
