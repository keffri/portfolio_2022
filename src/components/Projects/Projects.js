import React from 'react';
import Project from './Project';
import wwp from '../../images/wheresWaldoPreview.png';
import pp from '../../images/portfolio2022Preview.png';
import mmb from '../../images/miniMessageBoardPreview.png';
import vr from '../../images/veganRecipesPreview.png';

const Projects = () => {
  const devIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
  ];

  const projectInfo = [
    {
      id: 'projects/3.1',
      name: "Where's Waldo",
      src: wwp,
      desc: "A Where's Waldo project built using React that utilizes Firebase to store the coordinates a character which is then used to verify the character's location clicks on coordinates of the web page.",
      liveDemo: 'https://keffri.github.io/wheres-waldo/',
      viewCode: 'https://github.com/keffri/wheres-waldo',
    },
    {
      id: 'projects/3.2',
      name: 'Personal Portfolio',
      src: pp,
      desc: 'My current portfolio built with React as well as React-Bootstrap and Sass for front-end styling and functionality.',
      liveDemo: null,
      viewCode: 'https://github.com/keffri/portfolio_2022',
    },
    {
      id: 'projects/3.3',
      name: 'Mini Message Board',
      src: mmb,
      desc: 'A Mini Message Board built using NodeJS, Express and Pug. New messages data requested from the /new path with post is used to update the messages on the index page.',
      liveDemo: 'https://blooming-earth-14314.herokuapp.com/',
      viewCode: 'https://github.com/keffri/mini-message-board',
    },
    {
      id: 'projects/3.4',
      name: 'Vegan Recipes',
      src: vr,
      desc: 'A recipe based CRUD application built with NodeJS, Express, PUG, Mongoose and MongoDB.',
      liveDemo: 'https://frozen-brook-51539.herokuapp.com/cookbook',
      viewCode: 'https://github.com/keffri/vegan-recipes',
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
      <Project
        id={projectInfo[1].id}
        name={projectInfo[1].name}
        src={projectInfo[1].src}
        desc={projectInfo[1].desc}
        icons={[
          devIcons[0],
          devIcons[1],
          devIcons[2],
          devIcons[3],
          devIcons[5],
          devIcons[6],
        ]}
        liveDemo={projectInfo[1].liveDemo}
        viewCode={projectInfo[1].viewCode}
      />
      <Project
        id={projectInfo[2].id}
        name={projectInfo[2].name}
        src={projectInfo[2].src}
        desc={projectInfo[2].desc}
        icons={[
          devIcons[0],
          devIcons[1],
          devIcons[2],
          devIcons[7],
          devIcons[8],
        ]}
        liveDemo={projectInfo[2].liveDemo}
        viewCode={projectInfo[2].viewCode}
      />
      <Project
        id={projectInfo[3].id}
        name={projectInfo[3].name}
        src={projectInfo[3].src}
        desc={projectInfo[3].desc}
        icons={[
          devIcons[0],
          devIcons[1],
          devIcons[2],
          devIcons[7],
          devIcons[8],
          devIcons[9],
        ]}
        liveDemo={projectInfo[3].liveDemo}
        viewCode={projectInfo[3].viewCode}
      />
    </section>
  );
};

export default Projects;
