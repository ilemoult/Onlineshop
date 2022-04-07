import Link from 'next/link';

// Nicht fertig geworden :(
// Idee: Der User hat die Möglichkeit eine Vorauswahl von Produkten zu treffen, ohne sie in den Warenkorb legen zu müssen
// Ermöglicht eine bessere Übersicht und ein strukturierteres Einkaufserlebnis
// Über das Herz Icon unter jedem Produktfoto, werden die Produkte in einer Liste (in der Indexed Db) gespeichert und können oben rechts im Header aufgerufen werden
export default function Selection() {
  return (
    <div className="selection">
      <Link href="/selection">
        <a title="Meine Favoriten">♡</a>
      </Link>
    </div>
  );
}
