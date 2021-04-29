import React, { useEffect, useState } from 'react';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl';

import './styles.scss';

// == Component
const FamilyNameTitle = () => {
  const [family, setFamily] = useState({});
  (useEffect(() => {
    axios.get(`${baseurl}family`).then((result) => {
      if (result && result.data) {
        setFamily(result.data.family);
      }
    });
  }, []));
  return (
    <>
      <h1 className="familyNameTitle">{family.designation}</h1>
    </>
  );
};

// == Export
export default FamilyNameTitle;
