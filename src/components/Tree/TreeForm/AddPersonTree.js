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
           <input
            type="text"
            className="join__family__form-input"
            placeholder="Lieu de naissance"
          />
           <input
            type="text"
            className="join__family__form-input"
            placeholder="Dernier Lieu de vie connu"
          />
          <h2>Date de naiscance</h2>
          <input
            type="date"
            className="join__family__form-input"
            placeholder="Date de naissance"
          />
           <h2>Date de décès</h2>
          <input
            type="date"
            className="join__family__form-input"
            placeholder="Date de décès"
          />
          <h2>Ajouter une photo</h2>
          <input
            type="file"
            className="join__family__form-input"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg"
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
