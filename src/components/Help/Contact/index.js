import React, { useEffect } from 'react';
import './styles.scss';
import virginie from 'src/assets/images/virginie.jpeg';
import sebastien from 'src/assets/images/sebastien.jpg';
import theodore from 'src/assets/images/theodore.jpg';
import chloe from 'src/assets/images/chloe.png';
import florent from 'src/assets/images/florent.png';

const Contact = ({
  inputValue, onChangeInputValue, onSubmitForm, onHelpPages,
}) => {
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
  useEffect(() => {
    onHelpPages();
  });
  return (
    <section className="contact-section">
      <h1 className="contact-section-title">Contact</h1>
      <div className="contact-section-faces">
        <span className="contact-section-oneface"><p className="contact-section-name">Virginie</p> <img src={virginie} alt="Virginie" className="contact-picture" /><a href="virginielaborde.contact@gmail.com" className="contact-section-link">virginielaborde.contact@gmail.com</a></span>
        <span className="contact-section-oneface"><p className="contact-section-name">Sébastien</p><img src={sebastien} alt="Sébastien" className="contact-picture" /><a href="gonzalez.sebastien66@gmail.com" className="contact-section-link">gonzalez.sebastien66@gmail.com</a></span>
        <span className="contact-section-oneface"><p className="contact-section-name">Chloé</p> <img src={chloe} alt="Chloé" className="contact-picture" /><a href="chloe.piperno94350@gmail.com" className="contact-section-link">chloe.piperno94350@gmail.com</a></span>
        <span className="contact-section-oneface"><p className="contact-section-name">Théodore</p><img src={theodore} alt="Théodore" className="contact-picture" /><a href="theodorebing.dev@gmail.com" className="contact-section-link">theodorebing.dev@gmail.com</a></span>
        <span className="contact-section-oneface"><p className="contact-section-name">Florent</p><img src={florent} alt="Florent" className="contact-picture" /><a href="florent@gmail.com" className="contact-section-link-null">florentnullnullnull@gmail.com</a></span>
      </div>
      {/* <div className="contact-section-text">
          <h2 className="contact-section-text-title">
            Veuillez utiliser le formulaire ci-dessous si vous désirez nous contacter
          </h2> */}

      {/* <form className="contact-section-text-form" onSubmit={handleOnSubmit}>
            <label className="contact-section-text-form__input-label" htmlFor="email">
              Votre email
            </label>
            <input
              id="email"
              className="contact-section-text-form__input"
              type="text"
              placeholder="Saisissez votre email"
              value={inputValue}
              onChange={handleOnChange}
            />
            <label className="contact-section-text-form__text-area-label" htmlFor="message">
              Saisissez votre message
            </label>
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
          </form> */}
      {/* </div> */}
    </section>
  );
};

// == Export
export default Contact;
