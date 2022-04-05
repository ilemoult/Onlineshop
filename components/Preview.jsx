import React from 'react';
import Image from 'next/image';

export default function Preview( {image, title} ) {
  return (
    <article>
        <div>
        <img
          src={image}
          width="300"
          height="460"
          alt=''
          loading="lazy" />
        </div>
    </article>
  );
};