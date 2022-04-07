import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title }) {
  return (
    <div>
    <div className="site-wrapper">
      <Head>
        <title>{title || 'colorized.'}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </div>
    <Footer className="site-footer" />
    </div>
  );
}
