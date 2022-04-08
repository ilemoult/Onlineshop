import products from '../../js/products';
import Layout from '../../components/Layout';
import Image from 'next/image';

export async function getStaticPaths() {
  const paths = products.map(({ id }) => ({ params: { id: `${id}` } }));
  console.log(paths);
  return { paths, fallback: true };
};

export function getStaticProps({ params }) {
  const product = products.find(({ id }) => id === parseInt(params.id));

  return {
    props: {
      product,
    },
    revalidate: 3600,
  };
};

export default function Product({ product }) {
  const { image, title } = product;

  return (
    <Layout>
      <div>{title}</div>
      <Image src={image} alt="Produktfoto" width="354" height="532" />
      <button>In den Warenkorb</button>
      <button>Zu Favoriten hinzufügen</button>
      <div>
        <h1>Produktbeschreibung</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          aliquid fugiat consectetur perspiciatis adipisci ea animi, impedit
          veritatis soluta earum, sint harum dolores sequi aut praesentium
          veniam corrupti ex saepe?
        </div>
      </div>
    </Layout>
  );
}
