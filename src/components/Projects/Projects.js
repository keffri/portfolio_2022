import React from 'react';
import Project from './Project';
import wwp from '../../images/wheresWaldoPreview.png';
import pp from '../../images/portfolio2022Preview.png';
import st from '../../images/striveTalkPreview.png';
import ba from '../../images/blogApiPreview.png';
import bad from '../../images/blogApiDashboardPreview.png';

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
      desc: "A React-based Where's Waldo project that stores character coordinates using Firebase. These coordinates are then used to verify the character's location when clicked on the web page.",
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
      name: 'Strive Talk',
      src: st,
      desc: "A message board that enables users to register and log in to post messages. To ensure the security of users' passwords, bcryptjs has been employed to hash and salt them. Passport.js is used to authenticate log-ins, ensuring a safe and seamless experience for users.",
      liveDemo: 'https://strive-talk.herokuapp.com/',
      viewCode: 'https://github.com/keffri/strive-talk',
    },
    {
      id: 'projects/3.4',
      name: 'Blog API',
      src: ba,
      desc: 'A personal blog that leverages RESTful practices to read from and write to MongoDB using HTTP request methods. This user front-end provides a smooth and intuitive experience for viewing blog posts and posting comments on them.',
      liveDemo: 'https://keffri-blog-api.herokuapp.com/',
      viewCode: 'https://github.com/keffri/blog-api',
    },
    {
      id: 'projects/3.5',
      name: 'Blog API Dashboard',
      src: bad,
      desc: 'A personal blog that utilizes RESTful practices to enable reading from and writing to MongoDB via HTTP request methods. The admin front-end empowers users to create, edit, and delete both posts and comments.',
      liveDemo: 'https://keffri-blog-api-dashboard.herokuapp.com/',
      viewCode: 'https://github.com/keffri/blog-api-dashboard',
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
          devIcons[9],
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
      <Project
        id={projectInfo[4].id}
        name={projectInfo[4].name}
        src={projectInfo[4].src}
        desc={projectInfo[4].desc}
        icons={[
          devIcons[0],
          devIcons[1],
          devIcons[2],
          devIcons[7],
          devIcons[8],
          devIcons[9],
        ]}
        liveDemo={projectInfo[4].liveDemo}
        viewCode={projectInfo[4].viewCode}
      />
    </section>
  );
};

export default Projects;
