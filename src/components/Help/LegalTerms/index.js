// == Import : npm
import React from 'react';
import HelpHeader from '../HelpHeader';


import img from 'src/assets/images/campagne_tranquille.jpg';

// == Import : local
import './styles.scss';

// == Composant
const LegalTerms = () => {
  return (
    <>
      <HelpHeader />
      <section className="legalTerms-section">
        <h1 className="legalTerms-section-titre">Mentions légales</h1>
        <div className="legalTerms-section-text">
          <h2 className="legalTerms-section-text-title">Veuillez lire attentivement les informations suivantes</h2>
          <p className="legalTerms-section-text-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, id. Officia dolores nesciunt assumenda! Nesciunt non quidem animi laborum voluptatibus laudantium sapiente neque, provident repellendus quasi inventore facere, veritatis expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae deleniti optio natus asperiores perspiciatis reprehenderit omnis facilis repellendus, non dolore expedita blanditiis atque at aperiam saepe earum magnam quos, recusandae sed doloremque ad maxime assumenda. Error maxime minus voluptatum velit enim, molestiae aliquid praesentium sunt iusto qui aliquam aperiam tempora, eveniet animi itaque omnis consequuntur hic est quae eos asperiores natus deserunt! Voluptates commodi aspernatur minus voluptas, quod numquam, atque fuga sit laborum est aut nam illo tenetur odio iste repellat accusantium, fugit id! Facere harum, sit incidunt fugit, et eius molestias, esse quas ratione perferendis ducimus cupiditate minus.</p>
        </div>
        <img className="legalTerms-section-img" src={img} alt="img section une" />
      </section>
    </>
  )
}

  ;



// == Export
export default LegalTerms;