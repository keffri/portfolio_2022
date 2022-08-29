import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about__title">About</h1>
      <section className="about__container">
        <div className="about__intro">
          <p className="about__text">
            My name is Keffri Neal and I am a self-taught web developer from
            Port Coquitlam, Canada. I began teaching myself web development at
            the beginning of COVID-19 quarantine back in March 2020, and I have
            been continuing to learn ever since. When it comes to coding I enjoy
            problem solving, being creative and getting to see web pages come to
            life.
          </p>
          <p className="about__text">
            I graduated from the University of Kentucky with a B.A. in
            Psychology. I attended on a full athletic scholarship as a track and
            cross country runner for the four years that I attended.
          </p>
          <p className="about__text">
            When I am not coding I enjoy spending my free time exercising,
            reading, drawing and cooking.
          </p>
        </div>
        <div className="about__carousel"></div>
      </section>
    </section>
  );
};

export default About;
