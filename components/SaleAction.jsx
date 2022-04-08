import React from 'react';

// Sale Banner auf der Startseite
export default function SaleAction() {
  return (
    <article className="spring-sale">
      <div className="sale-items">
        <a href="/sale">
          <button className="sale-button">Spring Sale</button>
        </a>
        <div className="sale-text">
          Bis zu 30% Rabatt auf ausgewählte Artikel
        </div>
      </div>
    </article>
  );
}
