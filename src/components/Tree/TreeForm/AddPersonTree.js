// == Import : npm
import React from 'react';

// == Import : local
import '../styles.scss';

// == Composant
const AddPersonTree = () => {



  return (
    <div className='tree__add__page'>
      <h1>Ajouter un personne à l'arbre</h1>
      <div className="form__add__tree">
        <h2>Ajouter un personne à l'arbre!</h2>
        <form  className="form">
          <input
            type="text"
            className="join__family__form-input"
            placeholder="Nom"
          />
          <input
            type="text"
            className="join__family__form-input"
            placeholder="Prénom"
          />
          <h2>Date de naiscance</h2>
          <input
            type="date"
            className="join__family__form-input"
            placeholder="Date de naiscance"
          />
          <input
            type="text"
            className="join__family__form-input"
            placeholder="Lieu de vie"
          />
          <button type="submit" className="indexloginform-button-login" type="submit">Valider</button>
          <button type="reset" className="indexloginform-button-login">Effacer le formulaire</button>
        </form>
      </div>
    </div>

  );
};


// == Export
export default AddPersonTree;
