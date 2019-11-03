import { FunctionComponent } from 'react';
import Link from 'next/link';

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <Link href="/">
        <a title="martos website" className="header-logo">
          martos website
        </a>
      </Link>
    </header>
  );
};

export default Header;
