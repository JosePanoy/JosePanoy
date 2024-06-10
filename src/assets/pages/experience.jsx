import React from 'react';
import SkillMeter from '../../skills.jsx'; 
import Timeline from '../../school-div.jsx'; 
import SideProjects from '../../project-div.jsx'; 
import WorkTimeline from '../../work-exp.jsx'; 
import { Fade } from 'react-reveal';
import '../css/exp.css'

const events = [
  {
    title: 'Software Developement (OJT)',
    description: 'Assigned in Callbox Ilolilo Software Developement Team.',
    date: 'January 15, 2024 to April 24, 2024',
  },



];

function Experience() {
  return (

    <>

    <div className="container"> 
     <Fade delay={400}> <h2>Skills</h2></Fade>
      </div>

    <div className="experience-container">

      <div className="column-left">
        <Fade left delay={200}>
          <SkillMeter skill="PHP" proficiency={80} />
        </Fade>
        <Fade left delay={400}>
          <SkillMeter skill="HTML" proficiency={95} />
        </Fade>
        <Fade left delay={600}>
          <SkillMeter skill="JavaScript" proficiency={85} />
        </Fade>
        <Fade left delay={800}>
          <SkillMeter skill="React.js" proficiency={40} />
        </Fade>
      </div>
      <div className="column-right">
        <Fade right delay={200}>
          <SkillMeter skill="jQuery" proficiency={75} />
        </Fade>
        <Fade right delay={400}>
          <SkillMeter skill="CSS" proficiency={90} />
        </Fade>
        <Fade right delay={600}>
          <SkillMeter skill="Bootstrap" proficiency={50} />
        </Fade>
      </div>
    </div>

    <div>
      <Fade left delay={400}>
      <h1>Work Timeline</h1>
      </Fade>

      <Fade right delay={200}>
      <WorkTimeline events={events} />
      </Fade>
    </div>


    <div>
      <h1>My Education Timeline</h1>
      <Timeline />
    </div>

    <div>
      <h1>Projects & Side Projects</h1>
      <SideProjects />
    </div>


    </>
  );
}

export default Experience;
