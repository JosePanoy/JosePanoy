import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './assets/css/exp.css'

function SkillMeter(props) {
  return (
<div className="container">
  <div className="skill-line">
    <h3>{props.skill}</h3>
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${props.proficiency}%` }}>
        <span className="progress-text">{`${props.proficiency}%`}</span>
      </div>
    </div>
  </div>
</div>



  );
}

export default SkillMeter;
