import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Basketpic from '../public/einkaufswagen.png';

export default function Basket() {
  return (
    <div  className="warenkorb">
      <Link href="/basket">
        {/* <a><Image src={Basketpic} alt="Warenkorb" /></a> */}
        <a>Warenkorb</a>
      </Link>
    </div>
  )
};
