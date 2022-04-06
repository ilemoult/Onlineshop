import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();

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
      <button type="submit" className="loupe">&#128269;</button>
    </form>
  );
}
