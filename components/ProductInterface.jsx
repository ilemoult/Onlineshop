import { getFormattedPrice } from '../js/formattedprices';
import Link from 'next/link';

// Layout für jedes einzelne Produktfoto
export default function ProductInterface({ title, image, price, id }) {
  return (
    <article>
      <div>
        <div className="product-images">
          <Link href={`/products/${id}`} >
            <a title={title}>
              <img
                src={image}
                alt="Produktfoto"
                width="354"
                height="532"
                loading="lazy"
                className="single-product-image"
              />
            </a>
          </Link>
        </div>
        <button className="item-to-basket" title="In den Warenkorb">
          +
        </button>
        <button className="item-favorite" title="Zu Favoriten hinzufügen">
          🤍
        </button>
        <Link href={`/products/${id}`}>
          <a className="title-link">
            <div className="product-title">{title}</div>
          </a>
        </Link>
        <div className="product-price">{getFormattedPrice(price)}</div>
      </div>
    </article>
  );
}
