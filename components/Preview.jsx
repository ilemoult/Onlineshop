import React from 'react';
import Image from 'next/image';

export default function Preview( {image, title} ) {
  return (
    <article >
        <Image src={image} width="300" height="460" /* alt={title} */ loading="lazy" />
    </article>
  );
};