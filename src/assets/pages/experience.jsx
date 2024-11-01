import React from 'react';
import Skills from '../../skills.jsx'; 
import Timeline from '../../school-div.jsx'; 
import WorkTimeline from '../../work-exp.jsx'; 
import { Fade } from 'react-awesome-reveal'; 
import Networking from '../../networking.jsx';



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

      <Skills/>
      <Networking />

      <div>
        <Fade direction="left" delay={500} triggerTwice>
          <h1 style={{marginTop: '100px'}}>Work Timeline</h1>
        </Fade>
        <Fade direction="right" delay={500} triggerTwice>
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
