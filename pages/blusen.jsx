import Layout from '../components/Layout';
import Blusen from '../components/Blusen';
import products from '../js/products';

export default function blusen() {
  return (
    <Layout title="Blusen">
      <Blusen products={products} />
    </Layout>
  );
};