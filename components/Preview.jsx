import React from 'react';
import Image from 'next/image';
import { getFormattedPrice } from '../js/formattedprices';

export default function Preview({ image, title, price }) {
  return (
    <article className="preview">
      <div>
        <div className="product-images-preview">
          <Image href="" src={image} width="354" height="532" alt="" loading="lazy" className="preview-image" />
        </div>
        <div className="basket-or-favorite">
          <button className="item-to-basket" title="In den Warenkorb" >+</button>
          <button className="item-favorite" title="Zu Favoriten hinzufügen" >🤍</button>
        </div>
        <div className="product-title">{title}</div>
        <div className="product-price">{getFormattedPrice(price)}</div>
      </div>
    </article>
  );
}