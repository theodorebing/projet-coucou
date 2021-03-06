// == Import : npm
import React from 'react';
import HelpHeader from '../HelpHeader';

// == Import : local
import './styles.scss';

// == Composant
const Contact = ({ inputValue, onChangeInputValue, onSubmitForm }) => {

  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // pour faire le submit, il faut une valeur dans inputValue
    if (inputValue) {
      onSubmitForm();
    }
  };

  return (
    <>
      <HelpHeader />
      <section className="contact-section">
        <h1 className="contact-section-titre">Contact</h1>
        <div className="contact-section-text">
          <h2 className="contact-section-text-title">Veuillez utiliser le formulaire ci-dessous si vous désirez nous contacter</h2>

          <form className="contact-section-text-form" onSubmit={handleOnSubmit}>
            <label className="contact-section-text-form__input-label" htmlFor="email">Votre email</label>
            <input
              id="email"
              className="contact-section-text-form__input"
              type="text"
              placeholder="Saisissez votre email"
              value={inputValue}
              onChange={handleOnChange}
            />

            <label className="contact-section-text-form__text-area-label" htmlFor="message">Saisissez votre message</label>
            <textarea
              id="message"
              type="text"
              className="contact-section-text-form__text-area"
              placeholder="Saisissez votre message"
              value={inputValue}
              onChange={handleOnChange}
            />

            <button
              className="contact-section-text-form__button"
              type="submit"
            >
              Envoyer
      </button>
          </form>
        </div>
      </section>
    </>
  )
}


// == Export
export default Contact;
