import Link from 'next/link';

const Header = () => {
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
