import News from './News';

export default function NewsList({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Unsere Neuheiten</div>
      <div className="products-images">
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


// const [selectedCategory, setSelectedCategory] = useState(0);
// const [saleOnly, setSaleOnly] = useState(false);
// const [keyWord, setKeyWord] = useState('');
// const filteredProducts = getFilteredProducts(products, selectedCategory, saleOnly, keyWord);

// function getFilteredProducts(products, selectedCategory, saleOnly, keyWord){

//     const noCategoryFilter = selectedCategory === 0;
//     const noSaleFilter = !saleOnly;
//     const noKeyWordFilter = keyWord === keyWord.length < 2;

//      /* Regulärer Ausdruck, um zu testen, ob ein Muster in einem
//   anderen String vorkommt. "i" bedeutet "case insensitive",
//   also Großschreibung ignorieren.
//   Das RegExp-Objekt hat u.a. die Methode test(), um zu prüfen, ob ein String
//   die Bedingungen des regulären Ausdrucks erfüllt.
//   https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp */

//     const keywordRegExp = new RegExp(keyWord, 'i');     // i = case insensitive

//     return products
//     .filter(({category}) => noCategoryFilter || category === selectedCategory)
//     .filter(({sale}) => noSaleFilter || sale)
//     .filter(({title}) => noKeyWordFilter || keywordRegExp.test(title)); // bessere Alternative: title.toUpperCase.includes(keyWord.toUpperCase())
//     // noch eine bessere: Regular Expressions: In String nach bestimmten Mustern suchen: keywordRegExp.test(title)
    
// };
