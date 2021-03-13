// == Import : npm
import React from 'react';

import img from 'src/assets/images/campagne_tranquille.jpg';
import ProfileForm from 'src/containers/Profile';

// == Import : local
import './styles.scss';

// == Composant
const Profile = () => {

  return (
    <section className="profile">
      <div className="profile-container">
        <img className="profile-container-img" src={img} alt="img section une" />
        <div className="profile-container-innerElements">

          <ProfileForm />

        </div>
      </div>

    </section>
  )
}


// == Export
export default Profile;
