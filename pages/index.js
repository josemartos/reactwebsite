import Head from 'next/head';

import PageRoot from '../components/layout/PageRoot';
import Home from './home';

// general styles
import '../styles/main.scss';

const Index = () => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Front-end Developer | Jose Martos" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Front-end Developer | Jose Martos</title>

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <PageRoot>
      <Home />
    </PageRoot>
  </div>
);

export default Index;
