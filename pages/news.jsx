import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import products from '../js/products';

export default function news() {
  return (
    <Layout title="colorized.">
      <NewsList products={products} />
    </Layout>
  );
};
