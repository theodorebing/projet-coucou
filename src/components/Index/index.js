// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import arbre from 'src/assets/images/arbre.png';
import histoires from 'src/assets/images/histoires.png';
import Footer from 'src/components/Index/Footer';
import IndexLoginForm from 'src/containers/IndexLoginForm';
import SignUpForm from 'src/containers/SignUpForm';

// == Composant
const Index = ({ activeSignUpForm }) => (
  <div className="index">

    <div className="index-connexion">
      <div className="index-connexion-div">
        <span className="index-connexion-div-logo index-text-shadow">Coucou !</span>
        <p className="index-connexion-div-text">Réseau social privé et gratuit. <br /> Gardez une trace de l’histoire de votre famille!
        </p>
      </div>
      {!activeSignUpForm && (
        <IndexLoginForm />
      )}
      {activeSignUpForm && (
        <SignUpForm />
      )}
    </div>

    <div className="index-presentation1">
      <img src={arbre} alt="presentation1" className="index-img index-shadow" />
      <span className="index-presentation1-span">
        <h2 className="index-h2 index-text-shadow">Arbre généalogique</h2>
        <p className="index-presentation1-span-text index-presentation-text">Créez votre arbre généalogique en quelques cliques, ajoutez les nouveaux venus dans la famille et essayez de remonter à vos ancêtres les plus anciens.
        </p>
      </span>
    </div>

    <div className="index-presentation2">
      <span className="index-presentation2-span">
        <h2 className="index-h2 index-text-shadow">Histoires</h2>
        <p className="index-presentation2-span-text index-presentation-text">Ajoutez des histoires et enrichissez les d’anecdotes passionnantes afin de les partager au reste de votre famille.
        </p>
      </span>
      <img src={histoires} alt="presentation2" className="index-img index-shadow" />
    </div>
    <Footer />
  </div>
);

Index.propTypes = {
  activeSignUpForm: PropTypes.bool,
};
Index.defaultProps = {
  activeSignUpForm: false,
};

// == Export
export default Index;
