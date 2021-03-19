// == Import : npm
import React, { useState, useEffect } from 'react';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl.js'
import Option from './Option';

// == Import : local
import '../styles.scss';


// == Composant
const AddPersonTree = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstname] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [lastKnownLocation, setLastKnownLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfDeath, setDateOfDeath] = useState("");
  const [gender, setGender] = useState("");
  const [form, setForm] = useState([]);


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // loadTree()
  // }
  // const loadFormTree = async () => {
  //   try {
  //     const newPerson = {
  //       lastName: { lastName },
  //       firstName: { firstname },
  //     }
  //     const response = await axios.post(`${baseurl}tree`, newPerson);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    axios.get(`${baseurl}9/tree`)
      .then((result) => {
         if (result){
          console.log(result.data.familyTree)
           result.data.familyTree.map((NewData)=> {
            setForm(NewData)
           })
          
       }
      })
      .catch((error) => { (console.log(`cath tree`, error)) })
  }, []);
  return (
    <div className='tree__add__page'>
      {form && Object.keys(form).length ? (
        <div className="form__add__tree">
          <h1>Ajouter un personne à l'arbre</h1>
          <h2>Ajouter un personne à l'arbre!</h2>
          <form className="form" >
            <input
              type="text"
              className="join__family__form-input"
              placeholder='Nom'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
            <input
              type="text"
              className="join__family__form-input"
              placeholder="Prénom"
              value={firstName}
              onChange={e => setFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              className="join__family__form-input"
              placeholder="Lieu de naissance"
              value={placeOfBirth}
              onChange={e => setPlaceOfBirth(e.target.value)}
            />
            <h2>Selectionner un parent</h2>
            <select className="join__family__select">
            {/* {form.familyTree.map((data) =>{ */}
              <Option/>
            {/* } )} */}
             
            </select>
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
      ) : (
        <h2 className="story-title">Loading</h2>
      )}
    </div>

  );
};


// == Export
export default AddPersonTree;
