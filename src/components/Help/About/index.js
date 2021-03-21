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
        <p className="about-text-content">Coucou est issue d’une idée de Théodore, notre Product Owner, soumise lors des propositions de projets de fin de formation au sein de l’école O’clock.
        </p>
        <p className="about-text-content"> L’idée de départ était de créer un espace de liberté, privé, pour que chaque famille puisse se réunir à un même endroit et partager son histoire,
          <br /> avec le souhait d’en faire un espace accessible à toutes les générations.
        </p>
        <p className="about-text-content">Cinq développeurs juniors se sont alors associés pour donner vie à ce super projet !
        </p>
        <p className="about-text-content">Nous avions un temps imparti d'un mois pour créer une première version du site web fonctionnelle et prête à être mise en ligne. Si vous lisez cette page aujourd’hui, c’est que nous avons réussi. </p>
      </div>
    </section>
  );
};

// == Export
export default About;
