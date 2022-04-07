import { useRouter } from 'next/router';
import ProductInterface from './ProductInterface';
import products from '../js/products';

// Durchreichung des Suchbegriffes START
export default function SearchResults() {
  const router = useRouter();
  const searchTerm = router.query.suche ?? '';
  // console.log(searchTerm);
  const filteredProducts = getfilteredProducts(products, searchTerm);

  return (
    <section className="image-section">
      <div className="products-headline">Dein Suchergebnis</div>
      <div className="products-images">
        {filteredProducts.map(({ id, title, image, price }) => (
          <ProductInterface
            key={id}
            title={title}
            image={image}
            price={price}
            alt={title}
          /> // Rückgabe der gefilterten Produkte
        ))}
      </div>
    </section>
  );
}
// Durchreichung des Suchbegriffes ENDE

// Abgleichung des Suchbegriffes mit der Datenbank START
function getfilteredProducts(products, searchTerm) {
  const keywordRegExp = new RegExp(searchTerm, 'i');
  return products.filter(({ title, color, produktgruppe }) => keywordRegExp.test(title) || keywordRegExp.test(color) || keywordRegExp.test(produktgruppe));
}
// Abgleichung des Suchbegriffes mit der Datenbank ENDE
