import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  brands,
  regular,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import knp from '../images/knp.png';

const Home = () => {
  return (
    <section className="home">
      <img src={knp} alt="test" className="home__img" />
      <h1 className="home__title">Keffri Neal</h1>
      <ul className="home__links">
        <ul className="home__links--resume"></ul>
        <ul className="home__links--socials">
          <li>
            <FontAwesomeIcon icon={brands('linkedin')} className="home__icon" />
            <a
              href="https://www.linkedin.com/in/keffri/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={brands('github')} className="home__icon" />
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
              icon={regular('file-lines')}
              className="home__icon"
            />
            <a
              href="https://github.com/keffri/portfolio_2022/blob/70b390dc5ccb2788af9c13769203fa0798411ccf/src/files/Keffri_Neal_Resume.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={regular('envelope')}
              className="home__icon"
            />
            keffri.w.neal@gmail.com
          </li>
        </ul>
      </ul>
      <p className="home__text">Self-taught Web Developer</p>
    </section>
  );
};

export default Home;
