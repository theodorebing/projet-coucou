import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <div className="footer">
    <ul>
      <li><Link to="/help">A propos</Link></li>
      <li><Link to="/help/UserManual">Mode d'emploi</Link></li>
      <li><Link to="/help/Faq">FAQ</Link></li>
      <li><Link to="/help/NewFeatures">A venir!</Link></li>
      <li><Link to="/help/Contact">Contact</Link></li>
      <li><Link to="/help/LegalTerms">Mentions légales</Link></li>
    </ul>
  </div>
);

export default Footer;
