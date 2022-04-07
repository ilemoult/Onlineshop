import { useState } from 'react';
import FilterForm from './FilterForm';
import ProductInterface from './ProductInterface';

export default function Products({ products }) {

  const [colorId, setColorId] = useState(0)
  const filteredProducts = getFilteredProducts(products, colorId);


  return (
    <section className="image-section">
      <div className="products-headline">Alle Styles</div>
      <FilterForm
      colorId={colorId} 
      setColorId={setColorId} 
      />
      <div className="products-images">
        {filteredProducts.map(({ id, title, image, price }) => (
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

function getFilteredProducts(products, colorId){

  const noColorFilter = colorId === 0;

  return products.filter(({color}) => noColorFilter || color === colorId)

};