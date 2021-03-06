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
      {Object.keys(familyMembers).length ? (
        <>
          <FamilyNameTitle />
          <div className="familyPage-content">
            <FamilyCode />
            <div className="familyPage-content-members">
              {familyMembers.map((familyMember) => (
                <FamilyMember key={familyMember.email} {...familyMember} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2 className="loading">Loading</h2>
      )}
    </div>
  );
};

// == Export
export default Family;
