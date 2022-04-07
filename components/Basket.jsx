import React from 'react';
import Link from 'next/link';

export default function Basket() {
  return (
    <div className="warenkorb">
      <Link href="/basket">
          <a title="Warenkorb/ Checkout">
            <img 
              src='/einkaufswagen.png' 
              width="30" 
              height="30" 
              alt="Warenkorb" 
            />
          </a>
      </Link>
    </div>
  )
};