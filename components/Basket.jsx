import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Basketpic from '../public/einkaufswagen.png';

export default function Basket() {
  return (
    <div className="warenkorb">
        <Link href="/basket" passHref>
          <a><Image src='/public/einkaufswagen.png' width="30" height="30" alt="Warenkorb" /></a>
        </Link>
    </div>
  )
};

{/* <a href="kontakt.html"><img src="images/reservierung_r.jpg" width="187px" height="300" alt="Reservierung"></a> */}