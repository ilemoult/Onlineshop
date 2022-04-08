import products from '../../js/products';
import Layout from '../../components/Layout';
import Image from 'next/image';

export function getStaticPaths() {
  const paths = products.map(({ id }) => ({ params: { id: `${id}` } }));
  console.log(paths);
  return { paths, fallback: true };
}

export function getStaticProps({ params }) {
  const product = products.find(({ id }) => id === parseInt(params.id));

  return {
    props: {
      product,
    },
    revalidate: 3600,
  };
}

export default function Product({ product }) {
  const { image, title } = product;

  return (
    <Layout>
      <div className="image-and-button_description">
        
        <div className="product-image-container">
          <Image
            src={image}
            alt="Produktfoto"
            width="354"
            height="532"
            className="product-image"
          />
        </div>
        <div className="buttons-and-description">
          <div className="buttons-at-products">
            <button className="in-basket-product">In den Warenkorb</button>
            <button className="in-basket-product">
              Zu Favoriten hinzufügen
            </button>
          </div>
          <h1 className="product-description-headline">{title}</h1>
          <div className="product-description">
            Lorem ipsum dolor sit amet consectetur
            <br></br>
            adipisicing elit. Laboriosam
            <br></br>
            aliquid fugiat consectetur perspiciatis
            <br></br>
            adipisci ea animi, impedit harum
            <br></br>
            veritatis soluta earum, sint harum
            <br></br>
            dolores sequi aut praesentium
            <br></br>
            veniam corrupti ex saepe?Lorem ipsum
            <br></br>
            dolor sit amet consectetur harum
            <br></br>
            adipisicing elit. Laboriosam aliquid
            <br></br> 
            fugiat consectetur perspiciatis
            <br></br>
            adipisci ea animi, impedit veritatis
            <br></br>
            soluta earum, sint harum dolores
            <br></br>
            sequi aut praesentium veniam corrupti
            <br></br>
            ex saepe?
          </div>
        </div>
      </div>
    </Layout>
  );
}
