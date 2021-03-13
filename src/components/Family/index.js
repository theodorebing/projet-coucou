// == Import : npm
import React from 'react';

import Member from './Member';

// == Import : local
import './styles.scss';

// == Composant
const Family = () => {
  return (
    <section className="family-section">
      <h1 className="family-section-titre">Famille DUGENOUX</h1>
      <main className="family-section-container">
        <h2 className="family-section-container-title">CODE FAMILLE</h2>
        <div className="family-section-container-grid">
          <Member />
          <Member />
          <Member />
          <Member />
        </div>

      </main>
    </section>
  )
}

  ;



// == Export
export default Family;
