import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const PageRoot = ({ children }) => {
  return (
    <div className="page-root">
      <div className="page-background">
        <div className="page-wrapper">
          <Header />
          <section>{children}</section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageRoot;
