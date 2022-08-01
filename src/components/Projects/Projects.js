import React from "react";
import Project from "./Project";
import wwp from "../../images/wheresWaldoPreview.png";

const Projects = () => {
  const devIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  ];

  const projectInfo = [
    {
      id: "projects/3.1",
      name: "Where's Waldo",
      src: wwp,
      desc: "A Where's Waldo project built using React, and Firebase to verify coordinates of a mouse click against the stored coordinates of a selected character.",
      liveDemo: "https://keffri.github.io/wheres-waldo/",
      viewCode: "https://github.com/keffri/wheres-waldo",
    },
  ];

  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <Project
        id={projectInfo[0].id}
        name={projectInfo[0].name}
        src={projectInfo[0].src}
        desc={projectInfo[0].desc}
        icons={[
          devIcons[0],
          devIcons[1],
          devIcons[2],
          devIcons[3],
          devIcons[4],
        ]}
        liveDemo={projectInfo[0].liveDemo}
        viewCode={projectInfo[0].viewCode}
      />
    </section>
  );
};

export default Projects;
