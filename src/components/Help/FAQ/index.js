// == Import : npm
import React, { useEffect } from 'react';

// == Import : local
import './styles.scss';

// == Composant
const Faq = ({ onHelpPages }) => {
  useEffect(() => {
    onHelpPages();
  });
  return (
    <section className="faq">
      <h1 className="faq-title">Foire aux Questions</h1>
      <div className="faq-text">
        <h2 className="faq-text-subtitle">A quoi sert l’application ?</h2>
        <p className="faq-text-content">L’application Coucou sert à conserver les histoires et anecdotes de sa famille ainsi que son arbre généalogique, tout cela gratuitement.
        </p>
        <h2 className="faq-text-subtitle">Les informations de ma famille sont-elles privées ?</h2>
        <p className="faq-text-content"> Oui. Les membres du site n’appartenant pas à votre famille n’ont aucun droit d’accès à vos histoires et votre arbre !
        </p>
        <h2 className="faq-text-subtitle">Pouvons-nous ajouter des vidéos ? </h2>
        <p className="faq-text-content">Ça sera bientôt possible! Rendez-vous dans les Futures fonctionnalités pour en savoir plus.
        </p>
      </div>
    </section>
  );
};

// == Export
export default Faq;
