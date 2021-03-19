import React, { useEffect, useState } from 'react';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl';
import './styles.scss';

import FamilyMember from 'src/components/Family/FamilyMember';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import FamilyCode from './FamilyCode';

const Family = ({ noHelpButtons }) => {
  const [familyMembers, setFamilyMembers] = useState([]);
  (useEffect(() => {
    noHelpButtons();
    axios.get(`${baseurl}family`).then((result) => {
      if (result && result.data) {
        setFamilyMembers(result.data.members);
      }
    });
  }, []));
  return (
    <div className="familyPage">
      <FamilyNameTitle />
      <FamilyCode />
      <div className="familyPage-members">
        {familyMembers.map((familyMember) => (
          <FamilyMember key={familyMember.email} {...familyMember} />
        ))}
      </div>
    </div>
  );
};

// == Export
export default Family;
