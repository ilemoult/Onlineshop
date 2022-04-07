import ProductInterface from './ProductInterface';
import { getFilteredProducts } from './Products';
import FilterForm from './FilterForm';
import { useState } from 'react';

export default function MostWanted({ products }) {

  const [colorId, setColorId] = useState(0)
  const filteredProducts = getFilteredProducts(products, colorId);

  return (
    <section className="image-section">
      <div className="products-headline">Most Wanted</div>
      <FilterForm
      colorId={colorId} 
      setColorId={setColorId} 
      />
      <div className="products-images">
        {filteredProducts.filter((searchfor) => searchfor.mostWanted == true).map(({ id, title, image, price }) => (
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