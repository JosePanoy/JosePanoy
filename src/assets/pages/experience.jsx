import React from 'react';
import SkillMeter from '../../skills.jsx'; 
import Timeline from '../../school-div.jsx'; 
import WorkTimeline from '../../work-exp.jsx'; 
import { Fade } from 'react-awesome-reveal'; 

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
        <Fade direction="up" delay={200} triggerTwice>
          <h2>Skills</h2>
        </Fade>
      </div>

      <div className="experience-container">
        <div className="column-left">
          <Fade direction="left" delay={200} triggerTwice>
            <SkillMeter skill="PHP" proficiency={80} />
          </Fade>
          <Fade direction="left" delay={400} triggerTwice>
            <SkillMeter skill="HTML" proficiency={95} />
          </Fade>
          <Fade direction="left" delay={600} triggerTwice>
            <SkillMeter skill="JavaScript" proficiency={85} />
          </Fade>
          <Fade direction="left" delay={800} triggerTwice>
            <SkillMeter skill="React.js" proficiency={60} />
          </Fade>
        </div>
        <div className="column-right">
          <Fade direction="right" delay={200} triggerTwice>
            <SkillMeter skill="jQuery" proficiency={75} />
          </Fade>
          <Fade direction="right" delay={400} triggerTwice>
            <SkillMeter skill="CSS" proficiency={90} />
          </Fade>
          <Fade direction="right" delay={600} triggerTwice>
            <SkillMeter skill="Bootstrap" proficiency={50} />
          </Fade>
        </div>
      </div>

      <div>
        <Fade direction="left" delay={200} triggerTwice>
          <h1>Work Timeline</h1>
        </Fade>
        <Fade direction="right" delay={200} triggerTwice>
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
