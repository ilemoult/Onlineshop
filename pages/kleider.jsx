import Layout from '../components/Layout';
import Kleider from '../components/Kleider';
import products from '../js/products';

export default function kleider(){
  return (
    <Layout title="Kleider">
      <Kleider products={products} />
    </Layout>
  );
};