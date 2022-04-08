import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import header from '../public/img/header2.jpg';

export default function MainOpener() {
  return (
    <div className="header">
      <Image src={header} alt="Header" layout="responsive" />
      <div>
        <Link href="/index">
          <a className="brand-name">colorized.</a>
        </Link>
      </div>
      <div className="shop-now">
        <Link href="/produkte">
          <a>Shop now</a>
        </Link>
      </div>
    </div>
  );
}
