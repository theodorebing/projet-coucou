import React, { useEffect } from 'react';
import './styles.scss';

const LegalTerms = ({ onHelpPages }) => {
  useEffect(() => {
    onHelpPages();
  });
  return (

    <section className="legalTerms">
      <h1 className="legalTerms-title">Mentions légales</h1>
      <div className="legalTerms-text">
        <p className="legalTerms-text-content">Ce site internet est hébergé par AWS.
        </p>
        <p className="legalTerms-text-content">
          Ces mentions légales sont applicables à tout contenu disponible
          sous le nom de domaine xxxxxxxxxxxxxxx,
          y compris tous les sous-domaines et toutes les sous-pages du domaine.
        </p>
        <h2 className="legalTerms-text-subtitle">Siège social</h2>
        <p className="legalTerms-text-content">Non indiqué</p>
        <h2 className="legalTerms-text-subtitle">Contact</h2>
        <p className="legalTerms-text-content">Courriel : coucouaide@gmail.com et page Contact</p>
        <h2 className="legalTerms-text-subtitle">Représentée par</h2>
        <p className="legalTerms-text-content">Théodore Bing</p>
        <h2 className="legalTerms-text-subtitle">Informatique et libertés</h2>
        <p className="legalTerms-text-content">Droit d'accès, modification et suppression des données personnelles vous concernant :
        </p>
        <p className="legalTerms-text-content">
          Par courriel : coucouaide@gmail.com
        </p>
      </div>
    </section>
  );
};

export default LegalTerms;
