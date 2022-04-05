import Layout from '../components/Layout';
import Blusen from '../components/Blusen';
import products from '../js/products';

export default function blusen() {
  return (
    <Layout title="colorized.">
      <Blusen products={products} />
    </Layout>
  );
};