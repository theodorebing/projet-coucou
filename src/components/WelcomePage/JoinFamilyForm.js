
import React from 'react';
import './styles.scss';

const JoinFamilyForm = () => {
  return (
    <div className='form__family'>
      <h2>Rejoindre une famille !</h2>
      <form method="post" className="form">
        <input
          type="text"
          className="join__family__form-input"
          placeholder="Rentrer le code du groupe ici"
        />
        <button type="submit" className="indexloginform-button-login" type="submit">Valider</button>
      </form>
    </div>
  );
}

export default JoinFamilyForm;
