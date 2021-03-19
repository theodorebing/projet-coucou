// == Import : npm
import React from 'react';

import img from 'src/assets/images/campagne_tranquille.jpg';

// == Import : local
import './style.scss';

// == Composant
const Instructions = ({ id, flex, titre }) => (
  <section className={`instruction-section ${flex}`}>
    <div className="instruction-section-text">
      <h1 id={id} className="instruction-section-text-title">{titre}</h1>
      <p className="instruction-section-text-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, id. Officia dolores nesciunt assumenda! Nesciunt non quidem animi laborum voluptatibus laudantium sapiente neque, provident repellendus quasi inventore facere, veritatis expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae deleniti optio natus asperiores perspiciatis reprehenderit omnis facilis repellendus, non dolore expedita blanditiis atque at aperiam saepe earum magnam quos, recusandae sed doloremque ad maxime assumenda. Error maxime minus voluptatum velit enim, molestiae aliquid praesentium sunt iusto qui aliquam aperiam tempora, eveniet animi itaque omnis consequuntur hic est quae eos asperiores natus deserunt! Voluptates commodi aspernatur minus voluptas, quod numquam, atque fuga sit laborum est aut nam illo tenetur odio iste repellat accusantium, fugit id! Facere harum, sit incidunt fugit, et eius molestias, esse quas ratione perferendis ducimus cupiditate minus.</p>
    </div>
    <img className="instruction-section-img" src={img} alt="img section une" />
  </section>
);

// == Export
export default Instructions;
