import Layout from '../components/Layout';
import MostWanted from '../components/MostWanted';
import products from '../js/products';

export default function mostwanted() {
  return (
    <Layout title="MostWanted">
      <MostWanted products={products} />
    </Layout>
  );
};