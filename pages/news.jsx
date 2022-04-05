import Layout from '../components/Layout';
import News from '../components/News';
import products from '../js/products';

export default function news() {
  return (
    <Layout title="colorized.">
      <News products={products} />
    </Layout>
  );
};