// == Import : npm
import React, { useEffect, useState } from 'react';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl';
// == Import : local
import './styles.scss';

import profileImg from 'src/assets/images/avatar.png';

// == Composant
const Profile = ({ email, name, noHelpButtons }) => {
  function translateRole(role) {
    switch (role) {
      case 'user':
        return 'Membre de la famille';
      case 'family_admin':
        return 'Administrateur de la famille';
      case 'site_admin':
        return 'Administrateur du site';
      default:
        return 'Role inconnu';
    }
  }
  const [family, setFamily] = useState({});
  (useEffect(() => {
    noHelpButtons();
    axios.get(`${baseurl}family`).then((result) => {
      if (result && result.data) {
        setFamily(result.data.family);
      }
    });
  }, []));
  return (
    <div className="profile">
      <img className="profile-picture" alt="profil" src={profileImg} />
      <div className="profile-textPart">
        <div className="profile-textPart-email">Mon email : {email}</div>
        <div className="profile-textPart-family">Ma famille : {family.designation}</div>
        <div className="profile-textPart-role">Mon rôle : {translateRole(name)}</div>
      </div>
    </div>
  );
};

// == Export
export default Profile;
