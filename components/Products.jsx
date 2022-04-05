import ProductInterface from './ProductInterface';

export default function Products({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Alle Styles</div>
      <div className="products-images">
        {products.map(({ id, title, image, price }) => (
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
}
