import Layout from '../components/Layout';
import Products from '../components/Products';
import products from '../js/products';

export default function produkte() {
  return (
    <Layout title="colorized.">
        <Products products={products} />
    </Layout>
  )
}
