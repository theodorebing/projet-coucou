
import React from 'react';
import './styles.scss';

const NewFamilyForm = () => {
  return (
    <div className='form__family'>
      <h2>Ou créer une nouvelle famille sur Coucou!</h2>
      <form method="post" className="form">
        <input
          type="text"
          className="new__family__form-input"
          placeholder="Nom de la famille"
        />
        <button type="submit" className="indexloginform-button-login" type="submit">Créer</button>
      </form>
    </div>
  );
}

export default NewFamilyForm;
