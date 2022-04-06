import Layout from '../components/Layout';
import Shirts from '../components/Shirts';
import products from '../js/products';

export default function shirts() {
  return (
    <Layout title="Shirts">
      <Shirts products={products} />
    </Layout>
  );
};