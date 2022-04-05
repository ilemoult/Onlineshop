import Layout from '../components/Layout';
import Hosen from '../components/Hosen';
import products from '../js/products';

export default function hosen() {
  return (
    <Layout title="colorized.">
      <Hosen products={products} />
    </Layout>
  );
};