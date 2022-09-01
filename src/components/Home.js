import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  regular,
  solid,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import knp from "../images/knp.png";

// ! UPDATE WITH COVER LETTER + RESUME

const Home = () => {
  return (
    <section className="home">
      <img src={knp} alt="test" className="home__img" />
      <h1 className="home__title">Keffri Neal</h1>
      <ul className="home__links">
        <ul className="home__links--resume">
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
            <a href="../files/Keffri-Neal-Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
        <ul className="home__links--socials">
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
        <ul className="home__links--contact">
          <li>
            <FontAwesomeIcon
              icon={regular("envelope")}
              className="home__icon"
            />
            keffri.w.neal@gmail.com
          </li>
          <li>
            <FontAwesomeIcon
              icon={solid("mobile-screen")}
              className="home__icon"
            />
            604-396-4416
          </li>
        </ul>
      </ul>
      <p className="home__text">Self-taught Web Developer</p>
    </section>
  );
};

export default Home;
