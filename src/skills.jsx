import React from 'react';
import { Fade } from 'react-awesome-reveal';

import '../src/assets/css/skills.css';
import ReactLogo from '../src/assets/img/logo/react.png';
import PHPLogo from '../src/assets/img/logo/php.png';
import jQueryLogo from '../src/assets/img/logo/jquery.png';
import JavascriptLogo from '../src/assets/img/logo/javascript.png';
import BootstrapLogo from '../src/assets/img/logo/bootstrap.png';
import HTMLLogo from '../src/assets/img/logo/html.png';
import CSSLogo from '../src/assets/img/logo/css.png';
import PhotoshopLogo from '../src/assets/img/logo/photoshop.png';
import IllustratorLogo from '../src/assets/img/logo/illustrator.png';
import GithubLogo from '../src/assets/img/logo/github.png';
import NodeLogo from '../src/assets/img/logo/nodejs.png';
import ExpressLogo from '../src/assets/img/logo/expressjs.png';
import MongoLogo from '../src/assets/img/logo/mongodb.png';
import WordPressLogo from '../src/assets/img/logo/wordpress.png';
import FigmaLogo from '../src/assets/img/logo/figma.png'
import MysqlLogo from '../src/assets/img/logo/mysql.png';

const topRowSkills = [
  { img: PHPLogo, name: 'PHP' },
  { img: jQueryLogo, name: 'jQuery' },
  { img: JavascriptLogo, name: 'JavaScript' },
  { img: ReactLogo, name: 'React' },
  { img: GithubLogo, name: 'GitHub' },
  { img: NodeLogo, name: 'Node JS' },
];

const bottomRowSkills = [
  { img: ExpressLogo, name: 'Express JS' },
  { img: MongoLogo, name: 'MongoDB' },
  { img: MysqlLogo, name: 'Mysql' },
  { img: HTMLLogo, name: 'HTML' },
  { img: CSSLogo, name: 'CSS' },
  { img: BootstrapLogo, name: 'Bootstrap' },
  { img: FigmaLogo, name: 'Figma' },
  { img: WordPressLogo, name: 'Wordpress' },
  { img: PhotoshopLogo, name: 'Photoshop' },
  { img: IllustratorLogo, name: 'Illustrator' },
];

function Skills() {
  return (
    <div className="skills-container">
      <Fade direction="up" delay={250} triggerTwice>
        {topRowSkills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.img} alt={skill.name} />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </Fade>
      <Fade direction="up" delay={350} triggerTwice>
        {bottomRowSkills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.img} alt={skill.name} />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Skills;
