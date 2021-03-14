import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchFamilies } from 'src/actions/family';



const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchFamilies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
