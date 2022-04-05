import Layout from '../components/Layout';
import Pullover from '../components/Pullover';
import products from '../js/products';

export default function pullover() {
  return (
    <Layout title="colorized.">
      <Pullover products={products} />
    </Layout>
  );
};