import ProductInterface from './ProductInterface';

export default function Hosen({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Hosen</div>
      <div className="products-images">
        {products.filter((searchfor) => searchfor.produktgruppe === 'Hosen').map(({ id, title, image, price }) => (
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