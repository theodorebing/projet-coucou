import React from 'react';
import './styles.scss';

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

// == Component
const FamilyMember = ({ email, name }) => (
  <div className="familyMember">
    <div className="familyMember-div">
      {/* <h4 className="familyMember-name">{name}</h4> */}
      <p className="familyMember-div-email">{email}</p>
      <p className="familyMember-div-role">Role: {translateRole(name)}</p>
    </div>
  </div>
);

// == Export
export default FamilyMember;
