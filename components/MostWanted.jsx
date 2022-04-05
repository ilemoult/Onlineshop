import ProductInterface from './ProductInterface';

export default function MostWanted({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Most Wanted</div>
      <div className="products-images">
        {products.filter((searchfor) => searchfor.mostWanted == true).map(({ id, title, image, price }) => (
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