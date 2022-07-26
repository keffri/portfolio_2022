import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">Keffri Neal</h1>
      <ul className="home__links">
        <ul className="home__links--resume">
          {/* ADD LINKS TO PDF DOWNLOAD */}
          <li>
            <FontAwesomeIcon
              icon={regular("file-lines")}
              className="home__icon"
            />
            Cover Letter
          </li>
          <li>
            <FontAwesomeIcon
              icon={regular("file-lines")}
              className="home__icon"
            />
            Resume
          </li>
        </ul>
        <ul className="home__links--contact">
          <li>
            <FontAwesomeIcon icon={brands("linkedin")} className="home__icon" />
            <a
              href="https://www.linkedin.com/in/keffri/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={brands("github")} className="home__icon" />
            <a
              href="https://github.com/keffri"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
        </ul>
      </ul>
    </section>
  );
};

export default Home;
