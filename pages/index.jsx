import Layout from '../components/Layout';
import products from '../js/products';
import MainOpener from '../components/Mainopener';
import Previewselection from '../components/Previewselection.jsx';

export default function Home() {
  return (
    <Layout title="colorized.">
      <MainOpener/>
      <Previewselection products={products} />
    </Layout>
  );
}
