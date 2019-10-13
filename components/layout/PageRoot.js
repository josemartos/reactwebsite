import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageRoot = ({ children }) => {
  const [preload, setPreload] = useState('preload');

  useEffect(() => {
    setPreload('');
  }, []);

  return (
    <div className={`page-root ${preload}`}>
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
