import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './assets/css/exp.css'

function SkillMeter(props) {
  return (
<div class="container">
  <div class="skill-line">
    <h3>{props.skill}</h3>
    <div class="progress-container">
      <div class="progress-bar" style={{ width: `${props.proficiency}%` }}>
        <span class="progress-text">{`${props.proficiency}%`}</span>
      </div>
    </div>
  </div>
</div>



  );
}

export default SkillMeter;
