import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <ul>
        <li>
          <Link href="/">
            <a className="menue">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a className="menue">Neuheiten</a>
          </Link>
        </li>

        <li className="produkte-navi">
          <Link href="/produkte">
            <a className="menue">Produkte</a>
          </Link>
          <ul className="innen">
            <li>
              <Link href="/pullover">
                <a className="menue">Pullover</a>
              </Link>
            </li>
            <li>
              <Link href="/shirts">
                <a className="menue">Shirts</a>
              </Link>
            </li>
            <li>
              <Link href="/hosen">
                <a className="menue">Hosen</a>
              </Link>
            </li>
            <li>
              <Link href="/kleider">
                <a className="menue">Kleider</a>
              </Link>
            </li>
            <li>
              <Link href="/blusen">
                <a className="menue">Blusen</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/mostwanted">
            <a className="menue">Most Wanted</a>
          </Link>
        </li>
        <li>
          <Link href="/sale">
            <a className="menue">Sale</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
