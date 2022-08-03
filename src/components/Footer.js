import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

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
          <FontAwesomeIcon icon={brands("linkedin")} className="footer__icon" />
        </a>
        <a
          href="https://github.com/keffri"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={brands("github")} className="footer__icon" />
        </a>
        <a
          href="https://twitter.com/keffri"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={brands("twitter")} className="footer__icon" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
