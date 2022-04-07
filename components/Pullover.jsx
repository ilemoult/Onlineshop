import ProductInterface from './ProductInterface';
import { getFilteredProducts } from './Products';
import { useState } from 'react';
import FilterForm from './FilterForm';

export default function Pullover({ products }) {

  const [colorId, setColorId] = useState(0)
  const filteredProducts = getFilteredProducts(products, colorId);

  return (
    <section className="image-section">
      <div className="products-headline">Pullover</div>
      <FilterForm
      colorId={colorId} 
      setColorId={setColorId} 
      />
      <div className="products-images">
        {filteredProducts.filter((searchfor) => searchfor.produktgruppe === 'Pullover').map(({ id, title, image, price }) => (
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