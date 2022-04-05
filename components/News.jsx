import ProductInterface from './ProductInterface';

export default function News({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Unsere Neuheiten</div>
      <div className="products-images">
        {products.filter((searchfor) => searchfor.new == true).map(({ id, title, image, price }) => (
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