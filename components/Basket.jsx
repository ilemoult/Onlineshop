import React from 'react';
import Link from 'next/link';

// Leider nicht fertig geworden :(
// Im Warenkorb sind die Produkte gespeichert (über die indexed db) die gekauft werden
export default function Basket() {
  return (
    <div className="warenkorb">
      <Link href="/basket">
        <a title="Warenkorb & Checkout">
          <img
            src="/einkaufswagen.png"
            width="30"
            height="30"
            alt="Warenkorb"
          />
        </a>
      </Link>
    </div>
  );
}
