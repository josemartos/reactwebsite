import Header from '../Header';
import Footer from '../Footer';

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
