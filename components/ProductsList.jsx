import Products from './Products';

export default function ProductsList({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Alle Styles</div>
      <div className="products-images">
        {products.map(({ id, title, image, price }) => (
          <Products
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
