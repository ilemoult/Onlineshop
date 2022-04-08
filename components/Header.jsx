import Navigation from './Navigation';
import Basket from './Basket';
import Selection from './Selection';
import Search from './Search';

export default function Header() {
  return (
    <header className="site-header">
      <Search />
      <Navigation />
      <Selection />
      <Basket />
    </header>
  );
}
