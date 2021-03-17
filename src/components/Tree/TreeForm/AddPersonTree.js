// == Import : npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseurl from 'src/middlewares/baseurl.js'

// == Import : local
import '../styles.scss';

// == Composant
const AddPersonTree = () => {
  const [lastName, setLastName] = useState("");
  const [fistName, setFistname] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [lastKnownLocation, setLastKnownLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfDeath, setDateOfDeath] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loadTree()
  }
  const loadTree = async () => {
    try {
      // const response = await axios.get(`${baseurl}/tree`);
      // console.log(response.data.bodies[0].id)
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='tree__add__page'>
      <h1>Ajouter un personne à l'arbre</h1>
      <div className="form__add__tree">
        <h2>Ajouter un personne à l'arbre!</h2>
        <form className="form" onSubmit={handleSubmit} >
          <input
            type="text"
            className="join__family__form-input"
            placeholder="Nom"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
          <input
            type="text"
            className="join__family__form-input"
            placeholder="Prénom"
            value={fistName}
            onChange={e => setFistname(e.target.value)}
            required
          />
          <input
            type="text"
            className="join__family__form-input"
            placeholder="Lieu de naissance"
            value={placeOfBirth}
            onChange={e => setPlaceOfBirth(e.target.value)}
          />
          <input
            type="text"
            className="join__family__form-input"
            placeholder="Dernier Lieu de vie connu"
            value={lastKnownLocation}
            onChange={e => setLastKnownLocation(e.target.value)} 
          />
          <h2>Date de naiscance</h2>
          <input
            type="date"
            className="join__family__form-input"
            placeholder="Date de naissance"
            value={dateOfBirth}
            onChange={e => setDateOfBirth(e.target.value)}
          />
          <h2>Date de décès</h2>
          <input
            type="date"
            className="join__family__form-input"
            placeholder="Date de décès"
            value={dateOfDeath}
            onChange={e => setDateOfDeath(e.target.value)}
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
