import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import kncp1 from "../images/kncp1.jpg";
// import kncp2 from "../images/kncp2.jpg";
// import kncp3 from "../images/kncp3.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about__title">About</h1>
      <section className="about__container">
        <div className="about__intro">
          <p className="about__text">
            My name is Keffri Neal and I am a self-taught web developer from
            Port Coquitlam, Canada. I started to teach myself web development at
            the beginning of COVID quarantine back in 2020, and I have been
            continuing to learn ever since. When it comes to coding I enjoy
            problem solving, being creative and getting to see web pages come to
            life.
          </p>
          <p className="about__text">
            I graduated from the University of Kentucky with a B.A. in
            Psychology. I attended on a full athletic scholarship as a track and
            cross country runner for the four years I was a student.
          </p>
          <p className="about__text">
            When I am not coding I enjoy lifting, cycling, basketball, reading
            and cooking.
          </p>
        </div>
        <div className="about__carousel"></div>
      </section>
    </section>
  );
};

export default About;
