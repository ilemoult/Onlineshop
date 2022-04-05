import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import basket from '../public/einkaufswagen.png';

export default function warenkorb() {
  return (
    <div  className="warenkorb">
      <Link href="/warenkorb">
        <Image src={basket} alt="Warenkorb" />
      </Link>
    </div>
  )
};


