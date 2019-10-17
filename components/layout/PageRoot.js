import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

// general styles
import '../../styles/main.scss';

const PageRoot = ({ children }) => {
  const [preload, setPreload] = useState('preload');

  useEffect(() => {
    setPreload('');
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Front-end Developer | Jose Martos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Front-end Developer | Jose Martos</title>

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={`page-root ${preload}`}>
        <div className="page-background">
          <div className="page-wrapper">
            <Header />
            <section>{children}</section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRoot;
