// == Import : npm
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import GenderOption from './GenderOption';
import PeopleOption from './PeopleOption';
import RelationOption from './RelationOption';

// == Import : local
import '../styles.scss';

// == Composant
const AddPersonTree = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstname] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [lastKnownLocation, setLastKnownLocation] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState();
  const [dateOfDeath, setDateOfDeath] = useState();
  const [genders, setGenders] = useState([]);
  const [people, setPeople] = useState([]);
  const [relations, setRelations] = useState([]);
  const [genderName, setGenderName] = useState([]);
  const [otherPersonId, setPersonId] = useState('');
  const [relationId, setRelationID] = useState('');
  const history = useHistory();
  const sendFormTree = () => {
    axios.post(`${baseurl}tree`, {
      firstName,
      lastName,
      placeOfBirth,
      lastKnownLocation,
      dateOfBirth,
      dateOfDeath,
      genderName,
      otherPersonId,
      relationId,
    })
      .then((result) => {
        if (result) {
          history.push('/tree');
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  useEffect(() => {
    axios.get(`${baseurl}genders`)
      .then((result) => {
        setGenders(result.data);
      });
    axios.get(`${baseurl}9/people`)
      .then((result) => {
        if (result) {
          setPeople(result.data);
        }
      })
      .catch((error) => {
        (console.log('cath tree', error));
      });
    axios.get(`${baseurl}relations`)
      .then((result) => {
        setRelations(result.data);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    sendFormTree();
  };
  return (
    <div className="tree__add__page">
      <FamilyNameTitle />
      {people && Object.keys(people).length ? (
        <div className="form__add__tree">
          <h1 className="form-title">Ajouter une personne à l'arbre</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-div">
              <input
                type="text"
                className="join__family__form-input"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <input
                type="text"
                className="join__family__form-input"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="text"
                className="join__family__form-input"
                placeholder="Lieu de naissance"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
              />
              <input
                type="text"
                className="join__family__form-input"
                placeholder="Dernier Lieu de vie connu"
                value={lastKnownLocation}
                onChange={(e) => setLastKnownLocation(e.target.value)}
              />
              <h2>Genre</h2>
              <select className="join__family__select" onChange={(e) => setGenderName(e.target.value)}>
                <GenderOption genderName="Sélectionner un genre" />
                {genders.length && genders.map((gender) => (
                  <GenderOption key={gender.id} {...gender} />
                ))}
              </select>
              <h2>Sélectionner une relation</h2>
              <select className="join__family__select" onChange={(e) => setRelationID(e.target.value)}>
                <RelationOption id="null" type="Sélectionner une relation" />
                {relations.length && relations.map((relation) => (
                  <RelationOption key={relation.id} {...relation} />
                ))}
              </select>
              <h2>Sélectionner la personne à laquelle vous lier</h2>
              <select className="join__family__select" onChange={(e) => setPersonId(e.target.value)}>
                <PeopleOption id="null" firstName="Sélectionner" lastName="une personne" />
                {people.length && people.map((person) => (
                  <PeopleOption key={person.id} {...person} />
                ))}
              </select>
              <h2>Date de naissance</h2>
              <input
                type="date"
                className="join__family__form-input"
                placeholder="Date de naissance"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
              <h2>Date de décès</h2>
              <input
                type="date"
                className="join__family__form-input"
                placeholder="Date de décès"
                value={dateOfDeath}
                onChange={(e) => setDateOfDeath(e.target.value)}
              />
              {/* <h2>Ajouter une photo</h2>
            <input
              type="file"
              className="join__family__form-input"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            /> */}
            </div>
            <button type="submit" className="indexloginform-button-login">Valider</button>
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
