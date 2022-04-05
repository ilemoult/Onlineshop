import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';
import products from '../js/products';

export default function produkte() {
  return (
    <Layout title="colorized.">
        <ProductsList products={products} />
    </Layout>
  )
}
