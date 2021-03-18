import React from 'react';

import './styles.scss';

// == Component
const FamilyMember = ({ email, name }) => (
  <div className="familyMember">
    <div className="familyMember-div">
      {/* <h4 className="familyMember-name">{name}</h4> */}
      <p className="familyMember-div-email">{email}</p>
      <p className="familyMember-div-role">Role: {name}</p>
    </div>
  </div>
);

// == Export
export default FamilyMember;
