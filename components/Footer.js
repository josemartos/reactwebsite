import Link from 'next/link';
import GithubIcon from '../public/assets/svg/github-icon.svg';
import CookiesIcon from '../public/assets/svg/cookies-icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://github.com/josemartos"
          target="_blank"
          rel="noopener noreferrer"
          title="See Github account"
        >
          <GithubIcon width="24px" height="24px" />
        </a>

        <Link href="/cookies-policy">
          <a title="See cookies policy">
            <CookiesIcon width="24px" height="24px" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
