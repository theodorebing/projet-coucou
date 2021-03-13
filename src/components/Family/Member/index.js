
import React from 'react';
import './styles.scss';

import img from 'src/assets/images/campagne_tranquille.jpg';


const Member = ({
  // email,
  // password,
  // changeField,
  // familyName,
  // firstName,
  // pseudo,
  // description,
  // handleValidate,
}) => {

  return (

    <div className="family-section-container-grid-card">
      <img className="family-section-container-grid-card-img" src={img} alt="img section une" />
      <h2 className="family-section-container-grid-card-firstName">Toto</h2>
      <h2 className="family-section-container-grid-card-name">DUGENOUX</h2>
      <p className="family-section-container-grid-card-email">toto@toto</p>
      <p className="family-section-container-grid-card-dateOfBirth">20/10/1990</p>
    </div>

  );
};


export default Member;
