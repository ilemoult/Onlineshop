import ProductInterface from './ProductInterface';
import { getFilteredProducts } from './Products';
import { useState, useEffect } from 'react';
import FilterForm from './FilterForm';

export default function Blusen({ products }) {

  const [colorId, setColorId] = useState(0)
  const filteredProducts = getFilteredProducts(products, colorId); // Enthält nur die Datensatz-Objekte, bei denen eine Übereinstimmung in color vorliegt

  //URL durch Farbfilter Setzung Manipulieren und beim Reload beibehalten START
  // URL auslesen und nach Parametern suchen 
  useEffect(() => {
    const url = new URL(window.location.href);
    const oldProdukte = url.searchParams.get('produkte');
    if(oldProdukte){
      setColorId(parseInt(oldProdukte));
    }
  }, [])

  // neu URL auf Grundlage der alten konstruieren
  useEffect(() => {const url = new URL(window.location.href);
    // 'produkte' aus URL abschneiden
    url.searchParams.delete('produkte');
    // 'produkte' wieder dran setzen (Name) mit zusätzlichen Farbwert-Filter (Wert)
  if(colorId){url.searchParams.set('produkte', colorId)}
  window.history.replaceState({}, '',url);
  }, [colorId]); // url nur ändern, wenn der Farbfilter geändert wird
  //URL durch Farbfilter Setzung Manipulieren und beim Reload beibehalten ENDE

  return (
    <section className="image-section">
      <div className="products-headline">Blusen</div>
      <FilterForm
      colorId={colorId} 
      setColorId={setColorId} 
      />
      <div className="products-images">
        {filteredProducts.filter((searchfor) => searchfor.produktgruppe === 'Blusen').map(({ id, title, image, price }) => (
          <ProductInterface
            key={id}
            title={title}
            image={image}
            price={price}
            alt={title}
          />
        ))}
      </div>
    </section>
  );
};