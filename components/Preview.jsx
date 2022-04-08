import { getFormattedPrice } from '../js/formattedprices';
import Link from 'next/link';

export default function Preview({ image, title, price, id }) {
  return (
    <article className="preview">
      <div>
        <div className="product-images-preview">
        <Link href={`/products/${id}`} >
            <a title={title}>
              <img
                src={image}
                alt="Produktfoto"
                width="354"
                height="532"
                loading="lazy"
                className="preview-image"
              />
            </a>
          </Link>
        </div>
        <div className="basket-or-favorite">
          <button className="item-to-basket" title="In den Warenkorb">
            +
          </button>
          <button className="item-favorite" title="Zu Favoriten hinzufügen">
            🤍
          </button>
        </div>
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
