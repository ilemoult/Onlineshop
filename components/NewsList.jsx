import News from './News';

export default function NewsList({ products }) {
  return (
    <section className="image-section">
      <div className="news-headline">Unsere Neuheiten</div>
      <div className="news-images">
        {products.map(({ id, title, image, price }) => (
          <News
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
