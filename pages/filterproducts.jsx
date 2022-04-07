import Layout from '../components/Layout';
import SearchResults from '../components/SearchResults';

// Hier werden die Produkte dargestellt, die duch die Eingabe im input Suchfeld gefunden wurden
export default function filterproducts() {

    return (
    <Layout title="Dein Suchergebnis">
        <SearchResults />
    </Layout>
  );
};