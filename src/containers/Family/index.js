import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Family from 'src/components/Family';

// withRouter est un HoC à l'instar de connect
// il vient donc donner au composant qu'il englobe des infos via ses props
// ici on englobe un container et on a vu qu'on peut récupérer l'objet de props
// de ceux-ci via ownProps
const mapStateToProps = state => {

  return {
    families: state.family
  };
};

const mapDispatchToProps = (dispatch) => ({});

// ici on a un composant qui est connecté au state, grâce à connect
const container = connect(mapStateToProps, mapDispatchToProps)(Family);

// ici withRouter injecte dans les props du container, les objets history, match et location
// <Container history={...history} location={...location} match={...match} />
// les props du container pourront être récupérer avec ownProps
export default withRouter(container);
