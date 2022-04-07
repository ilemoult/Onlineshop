import Layout from '../components/Layout';
import Products from '../components/Products';
import products from '../js/products';
import { useState } from 'react';

export default function produkte() {

  return (
    <Layout title="Produkte">
        <Products products={products} />
    </Layout>
  )
}
