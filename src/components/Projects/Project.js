import React from "react";

const Project = (props) => {
  return (
    <section className="project">
      <div className="anchor" id={props.id}></div>
      <img
        className="project__img"
        src={props.src}
        alt={`${props.projectNo}`}
      />
      <section className="project__info">
        <h1 className="project__title">{props.name}</h1>
        <p className="project__desc">{props.desc}</p>
        <div className="project__icons">
          {props.icons.map((element, i) => {
            return (
              <img src={element} alt="icon" className="project__icon" key={i} />
            );
          })}
        </div>
        <div className="project__buttons">
          {props.liveDemo && (
            <button className="project__button">
              <a
                href={props.liveDemo}
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo
              </a>
            </button>
          )}
          <button className="project__button">
            <a href={props.viewCode} target="_blank" rel="noreferrer noopener">
              View Code
            </a>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Project;
