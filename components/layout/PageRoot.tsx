import { useEffect, useState, FunctionComponent } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageRoot: FunctionComponent = ({ children }) => {
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
            <main className="page-main">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRoot;
