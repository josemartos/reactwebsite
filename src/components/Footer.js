import React from 'react';

import GithubIcon from '../../assets/svg/github-icon.svg';

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
      </div>
    </footer>
  );
};

export default Footer;
