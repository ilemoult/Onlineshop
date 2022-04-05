import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <ul>
        <li>
          <Link href="/neuheiten">
            <a>Neuheiten</a>
          </Link>
        </li>

        <li className="produkte-navi">
          <Link href="/produkte">
            <a>Produkte</a>
          </Link>
          <ul className="innen">
            <li>
              <Link href="/pullover">
                <a>Pullover</a>
              </Link>
            </li>
            <li>
              <Link href="/shirts">
                <a>Shirts</a>
              </Link>
            </li>
            <li>
              <Link href="/hosen">
                <a>Hosen</a>
              </Link>
            </li>
            <li>
              <Link href="/kleider">
                <a>Kleider</a>
              </Link>
            </li>
            <li>
              <Link href="/blusen">
                <a>Blusen</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/mostwanted">
            <a>Most Wanted</a>
          </Link>
        </li>
        <li>
          <Link href="/sale">
            <a>Sale</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
