import React from 'react';
import './assets/css/work-exp.css';

const WorkTimeline = ({ events }) => {
  return (
    <div className="container-work">
    <div className="work-timeline">
      <div className="work-timeline-line"></div>
      {events.map((event, index) => (
        <div className="work-timeline-event" key={index}>
          <div className="dot"></div>
          <div className="work-timeline-event-date">
            <span className="date">{event.date}</span>
          </div>
          <div className="work-timeline-event-content">
            <h3>{event.title}</h3>
            <p><span className="bullet">&#8226;</span> {event.description}</p> 
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WorkTimeline;
