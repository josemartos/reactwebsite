import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageRoot = ({ children }) => {
  const [preload, setPreload] = useState('preload');

  useEffect(() => {
    setPreload('');
  }, []);

  return (
    <div>
      <div className={`page-root ${preload}`}>
        <div className="page-background">
          <div className="page-wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRoot;
