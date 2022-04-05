import React from 'react';
import { getFormattedPrice } from '../js/formattedprices';

export default function News( {title, image, price} ) {
  return (
    <article>
      <div className="product-images"><img src={image} alt='' loading='lazy' /></div>
      <div className="product-title">{title}</div>
      <div className="product-price">{getFormattedPrice(price)}</div>
    </article>
  );
};
