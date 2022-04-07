import Layout from '../components/Layout';
import products from '../js/products';
import MainOpener from '../components/Mainopener';
import Previewselection from '../components/Previewselection.jsx';
import SaleAction from '../components/SaleAction.jsx';

export default function home() {

  return (
    <Layout title="colorized.">
      <MainOpener />
      <SaleAction />
      <Previewselection products={products} />
    </Layout>
  );
}
