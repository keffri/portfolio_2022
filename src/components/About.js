import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about__title">About</h1>
      <section className="about__container">
        <div className="about__intro">
          <p className="about__text">
            Hello there, I am Keffri Neal, a web developer based in Port
            Coquitlam, British Columbia. I began my journey in web development
            in March of 2020, and ever since then, I have been continuously
            expanding my knowledge and improving my skills in this exciting
            field. What drives my passion for coding is the satisfaction I get
            from problem-solving, exploring my creativity and seeing web pages
            come to life.
          </p>
          <p className="about__text">
            After four years of pursuing my passion for running track and cross
            country, I proudly graduated from the University of Kentucky with a
            Bachelor of Arts degree in Psychology. Throughout my time at the
            university, I was fortunate to be on a full athletic scholarship,
            allowing me to excel both academically and athletically.
          </p>
          <p className="about__text">
            In my spare time, I find fulfillment in a variety of hobbies.
            Running and calisthenics keep me active and energized, because
            maintaining my physical and mental wellbeing is a priority.
            Additionally, I love to unwind with a good book, jot down my
            thoughts and reflections in a journal, and experiment with new
            recipes in the kitchen.
          </p>
        </div>
        <div className="about__carousel"></div>
      </section>
    </section>
  );
};

export default About;
