import React from 'react';
import SkillMeter from '../../skills.jsx'; 
import Timeline from '../../school-div.jsx'; 
import WorkTimeline from '../../work-exp.jsx'; 
import { Fade } from 'react-awesome-reveal'; // Import Fade from react-awesome-reveal
import '../css/exp.css';

const events = [
  {
    title: 'Software Development (OJT)',
    description: 'Assigned in Callbox Iloilo Software Development Team.',
    date: 'January 15, 2024 to April 24, 2024',
  },
];

function Experience() {
  return (
    <>
      <div className="container"> 
        <Fade direction="up" delay={400} triggerOnce>
          <h2>Skills</h2>
        </Fade>
      </div>

      <div className="experience-container">
        <div className="column-left">
          <Fade direction="left" delay={200} triggerOnce>
            <SkillMeter skill="PHP" proficiency={80} />
          </Fade>
          <Fade direction="left" delay={400} triggerOnce>
            <SkillMeter skill="HTML" proficiency={95} />
          </Fade>
          <Fade direction="left" delay={600} triggerOnce>
            <SkillMeter skill="JavaScript" proficiency={85} />
          </Fade>
          <Fade direction="left" delay={800} triggerOnce>
            <SkillMeter skill="React.js" proficiency={40} />
          </Fade>
        </div>
        <div className="column-right">
          <Fade direction="right" delay={200} triggerOnce>
            <SkillMeter skill="jQuery" proficiency={75} />
          </Fade>
          <Fade direction="right" delay={400} triggerOnce>
            <SkillMeter skill="CSS" proficiency={90} />
          </Fade>
          <Fade direction="right" delay={600} triggerOnce>
            <SkillMeter skill="Bootstrap" proficiency={50} />
          </Fade>
        </div>
      </div>

      <div>
        <Fade direction="left" delay={400} triggerOnce>
          <h1>Work Timeline</h1>
        </Fade>
        <Fade direction="right" delay={200} triggerOnce>
          <WorkTimeline events={events} />
        </Fade>
      </div>

      <div>
        <Fade direction="left" delay={200} triggerOnce>
          <h1>My Education Timeline</h1>
        </Fade>
        <Fade direction="up" delay={400} triggerOnce>
          <Timeline />
        </Fade>
      </div>
    </>
  );
}

export default Experience;
