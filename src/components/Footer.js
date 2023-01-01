import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  brands,
  regular,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Keffri Neal</h3>
      <section className="footer__links">
        <a
          href="https://www.linkedin.com/in/keffri/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={brands('linkedin')} className="footer__icon" />
        </a>
        <a
          href="https://github.com/keffri"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={brands('github')} className="footer__icon" />
        </a>
        <a
          href="https://drive.google.com/file/d/1sgmx9hBdSu-g13lq-FQ1stH-FC2KEbcE/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={regular('file-lines')}
            className="footer__icon"
          />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
