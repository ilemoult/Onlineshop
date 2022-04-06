import { getFormattedPrice } from '../js/formattedprices';
import Image from 'next/image';

export default function ProductInterface( {title, image, price} ) {
  return (
    <article>
      <div className="product-images">
        <Image
          src={image}
          alt='' width='354'
          height='532'
          loading='lazy'
        />
      </div>
      <div className="product-title">{title}</div>
      <div className="product-price">{getFormattedPrice(price)}</div>
    </article>
  );
};
