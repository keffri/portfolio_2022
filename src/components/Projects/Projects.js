import React from 'react';
import Project from './Project';
import wwp from '../../images/wheresWaldoPreview.png';
import pp from '../../images/portfolio2022Preview.png';
import vr from '../../images/veganRecipesPreview.png';
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
      name: 'Vegan Recipes',
      src: vr,
      desc: 'A CRUD application based on recipes, with the addition of courses and cuisines.',
      liveDemo: 'https://keffri-vegan-recipes.herokuapp.com/',
      viewCode: 'https://github.com/keffri/vegan-recipes',
    },
    {
      id: 'projects/3.4',
      name: 'Strive Talk',
      src: st,
      desc: 'A message board that allows you to sign-up and log-in to post messages. Bcryptjs is used to hash and salt passwords, with Passport.js used to authenticate log-ins.',
      liveDemo: 'https://strive-talk.herokuapp.com/',
      viewCode: 'https://github.com/keffri/strive-talk',
    },
    {
      id: 'projects/3.5',
      name: 'Blog API',
      src: ba,
      desc: 'A personal blog that implements RESTful practices to read from and write to MongoDB with HTTP request methods. This is the user front-end for viewing, and posting comments on specific blog posts.',
      liveDemo: 'https://keffri-blog-api.herokuapp.com/',
      viewCode: 'https://github.com/keffri/blog-api',
    },
    {
      id: 'projects/3.6',
      name: 'Blog API Dashboard',
      src: bad,
      desc: 'A personal blog that implements RESTful practices to read from and write to MongoDB with HTTP request methods. This is the admin front-end for posting, editing and deleting posts and comments.',
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
      <Project
        id={projectInfo[5].id}
        name={projectInfo[5].name}
        src={projectInfo[5].src}
        desc={projectInfo[5].desc}
        icons={[
          devIcons[0],
          devIcons[1],
          devIcons[2],
          devIcons[7],
          devIcons[8],
          devIcons[9],
        ]}
        liveDemo={projectInfo[5].liveDemo}
        viewCode={projectInfo[5].viewCode}
      />
    </section>
  );
};

export default Projects;
