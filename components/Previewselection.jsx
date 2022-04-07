import React, { useState, useEffect } from 'react';
import { shuffle } from '../js/helpers';
import Preview from './Preview';

export default function Previewselection({ products }) {

  const [randomProducts, setRandomProducts] = useState([]);
  
  // Drei Produkte werden zufällig ausgesucht
  // Mischt die Objekte im Datensatz durch und schneidet die ersten drei ab
  useEffect(() => {
      const random = shuffle(products);
      setRandomProducts(random.slice(0,3))
  }, [products]);

  return (
    <section className="outfit-mix">
        <h1>Deine Styles des Monats</h1>
        <div className="outfits">
        {randomProducts.map((auswahl) => (
        <Preview
          key={auswahl.id}
          {...auswahl}
        />
        ))}
      </div>
    </section>
  );
}
