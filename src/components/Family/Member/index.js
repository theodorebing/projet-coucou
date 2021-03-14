import React from 'react';
import './styles.scss';

import img from 'src/assets/images/campagne_tranquille.jpg';


const Member = ({
  email,
  familyName,
  firstName,
  dateOfBirth,
}
) => {

  return (

    <div className="family-section-container-grid-card">
      <img className="family-section-container-grid-card-img" src={img} alt="img section une" />
      <h2 className="family-section-container-grid-card-firstName">{firstName}</h2>
      <h2 className="family-section-container-grid-card-name">{familyName}</h2>
      <p className="family-section-container-grid-card-email">{email}</p>
      <p className="family-section-container-grid-card-dateOfBirth">{dateOfBirth}</p>
    </div>

  );
};


export default Member;
