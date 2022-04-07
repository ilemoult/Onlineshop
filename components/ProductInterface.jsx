import { getFormattedPrice } from '../js/formattedprices';
import Image from 'next/image';

export default function ProductInterface( {title, image, price} ) {
  return (
    <article>
      <div className="product-images">
        <Image
          src={image}
          alt='Produktfoto' 
          width='354'
          height='532'
          loading='lazy'
          className="single-product-image"
        />
      </div>
      <button className="item-to-basket" title="In den Warenkorb">+</button>
      <button className="item-favorite" title="Zu Favoriten hinzufügen">🤍</button>
      <div className="product-title">{title}</div>
      <div className="product-price">{getFormattedPrice(price)}</div>
    </article>
  );
};