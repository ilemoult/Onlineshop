import { useRouter } from 'next/router';

// Suchfunktion über das Texteingabefeld
// von jeder Seite aus möglich
// gleicht immer alle Produkte ab
export default function Search() {

  const router = useRouter();

  // Kein neuer Seitenaufruf nötig - url wird mit dem Pfad der filterproducts.jsx erweitert + dem Suchbegriff
  // bleibt beim Reload erhalten
  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const suche = form.elements.suche.value;

    router.push({
      pathname: '/filterproducts',
      query: { suche },
    })
  }

  return (
    <form onSubmit={submit} className="searchform">
      <input className="search" type="search" id="keyWord" name="suche" />
      <button type="submit" className="loupe" title="Suche starten" >&#128269;</button>
    </form>
  );
}
