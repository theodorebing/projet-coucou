import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <div className="footer">
    <ul>
      <li><Link to="/About">À propos</Link></li>
      <li><Link to="/UserManual">Mode d'emploi</Link></li>
      <li><Link to="/Faq">FAQ</Link></li>
      <li><Link to="/NewFeatures">À venir!</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/LegalTerms">Mentions légales</Link></li>
    </ul>
  </div>
);

export default Footer;
