// == Import : npm
import React from 'react';

import Member from './Member';

// == Import : local
import './styles.scss';

// == Composant
const Family = ({ families }) => {
  console.log("families z", families)

  const items = []

  const familiesArray = Object.keys(families)

  familiesArray.forEach((family, i) => {
    items.push(<Member key={family.email} {...families[i]} />)
  })

  return (
    <section className="family-section">
      <h1 className="family-section-titre">Famille </h1>
      <main className="family-section-container">
        <h2 className="family-section-container-title">CODE FAMILLE : </h2>

        {families &&
          (
            <div className="family-section-container-grid">
              {items}
            </div>
          )}

      </main>
    </section>
  )
}

// == Export
export default Family;
