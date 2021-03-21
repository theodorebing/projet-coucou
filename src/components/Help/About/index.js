// == Import : npm
import React, { useEffect } from 'react';

// == Import : local
import './styles.scss';

// == Composant
const About = ({ onHelpPages }) => {
  useEffect(() => {
    onHelpPages();
  });
  return (
    <section className="about">
      <h1 className="about-title">A propos</h1>
      <div className="about-text">
        <h2 className="about-text-subtitle">Laissez nous vous expliquer l'idée derrière ce projet</h2>
        <p className="about-text-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, id. Officia dolores nesciunt assumenda! Nesciunt non quidem animi laborum voluptatibus laudantium sapiente neque, provident repellendus quasi inventore facere, veritatis expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae deleniti optio natus asperiores perspiciatis reprehenderit omnis facilis repellendus, non dolore expedita blanditiis atque at aperiam saepe earum magnam quos, recusandae sed doloremque ad maxime assumenda. Error maxime minus voluptatum velit enim, molestiae aliquid praesentium sunt iusto qui aliquam aperiam tempora, eveniet animi itaque omnis consequuntur hic est quae eos asperiores natus deserunt! Voluptates commodi aspernatur minus voluptas, quod numquam, atque fuga sit laborum est aut nam illo tenetur odio iste repellat accusantium, fugit id! Facere harum, sit incidunt fugit, et eius molestias, esse quas ratione perferendis ducimus cupiditate minus.</p>
      </div>
    </section>
  );
};

// == Export
export default About;
