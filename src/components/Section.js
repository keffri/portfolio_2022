import React from "react";

const Section = (props) => {
  return (
    <section className="section">
      <h1 className="section__title">{props.title}</h1>
    </section>
  );
};

export default Section;
