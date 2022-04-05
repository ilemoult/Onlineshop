import Link from 'next/link';
import Navigation from './Navigation';
import Warenkorb from './Warenkorb';
import Selection from './Selection';

import Search from './Search';

export default function Header() {
  return (
    <header className="site-header">
      <Search />
      <Navigation />
      <Selection />
      <Warenkorb />
    </header>
  );
}