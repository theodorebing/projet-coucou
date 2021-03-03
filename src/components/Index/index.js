// == Import npm
import React from 'react';

// == Import
import './styles.scss';
// import logo from 'src/assets/Logo-Coucou-transparent.png';
import wfindex from 'src/assets/images/WFIndex.png';

// == Composant
const Index = () => (
  <div className="index">

    <div className="index-connexion">
      <div className="index-connexion-div">
        {/* <img src={logo} alt="Logo" className="index-logo" /> */}
        <span className="index-connexion-div-logo">Coucou !</span>
        <p className="index-connexion-div-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ex itaque consequuntur commodi eum error temporibus, ipsam rerum atque aspernatur accusamus dolorem, aperiam iure non, placeat mollitia laudantium molestias blanditiis!
        </p>
      </div>

      <form action="submit" className="index-connexion-form">
        <input type="text" className="index-connexion-form-input" />
      </form>
    </div>

    <div className="index-presentation1">
      <img src={wfindex} alt="presentation1" className="index-presentation1-img" />
      <p className="index-presentation1-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, cumque similique! Eaque modi illum tempora, necessitatibus voluptate quas corporis maxime magni vero itaque optio voluptatem recusandae, quibusdam ullam nesciunt molestiae? Facilis totam tempore voluptate ullam, deserunt asperiores praesentium harum quam nobis placeat magni fugiat possimus veritatis. Labore velit consectetur nostrum fugit animi eius, est, perspiciatis eum tempora corporis explicabo consequatur Amet perferendis corrupti aliquam ipsum est quas nam dolorum ducimus quasi nemo explicabo qui facilis, blanditiis, tenetur cupiditate accusantium. Reiciendis distinctio autem suscipit architecto aperiam animi magnam fuga totam ab? Aperiam enim sint quae error, voluptatibus tempore dolores quas totam placeat ipsum neque facilis nostrum quidem dolore minima reprehenderit incidunt expedita labore adipisci aspernatur distinctio explicabo eos sed! Id, ad. Dolore incidunt sapiente facilis quam ab, fugit molestias quo vitae voluptate, blanditiis corrupti voluptas? Iure explicabo molestiae illum alias culpa quae sapiente cumque. Velit soluta voluptas explicabo rem molestias id!
      </p>
    </div>

  </div>
);

// == Export
export default Index;
