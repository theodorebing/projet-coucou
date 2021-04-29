import React, { useEffect, useState } from 'react';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl';
import './styles.scss';

const FamilyCode = () => {
  const [family, setFamily] = useState({});
  (useEffect(() => {
    axios.get(`${baseurl}family`).then((result) => {
      if (result && result.data) {
        // setTimeout(() => {
        setFamily(result.data.family);
        // }, 2000);
      }
    });
  }, []));
  return (
    <div className="familyCode">
      <h2 className="familyCode-title">Code de ma famille</h2>
      <h3 className="familyCode-code">{family.code}</h3>
    </div>
  );
};

export default FamilyCode;
