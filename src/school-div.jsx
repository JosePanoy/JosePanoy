import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './assets/css/exp.css'
import school1 from './assets/img/16.jpg'
import school2 from './assets/img/15.jpg'
import school3 from './assets/img/14.jpg'
import school4 from './assets/img/17.jpg'
import school5 from './assets/img/13.jpg'


const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020-2024"
      >
        <h3 className="vertical-timeline-element-title">Western Institute of Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">Luna Street, La Paz, Iloilo City, Philippines, 5000</h4>
        <img src={school1} alt="Western Institute of Technology" className="school-image" />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018-2020"
      >
        <h3 className="vertical-timeline-element-title">Western Institute of Technology Senior High School</h3>
        <h4 className="vertical-timeline-element-subtitle">Luna Street, La Paz, Iloilo City, Philippines, 5000</h4>
        <img src={school2} alt="Western Institute of Technology" className="school-image" />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014-2018"
      >
        <h3 className="vertical-timeline-element-title">Leonora S. Salapantan National High School</h3>
        <h4 className="vertical-timeline-element-subtitle">RV Sanchez St, Poblacion San Miguel, Iloilo City, 5025 Iloilo</h4>
        <img src={school3} alt="Western Institute of Technology" className="school-image" />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013-2014"
      >
        <h3 className="vertical-timeline-element-title">San Miguel Central Elementary School</h3>
        <h4 className="vertical-timeline-element-subtitle">San Miguel, Iloilo</h4>
        <img src={school4} alt="Western Institute of Technology" className="school-image" />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2008-2013"
      >
        <h3 className="vertical-timeline-element-title">Sulong Elementary School</h3>
        <h4 className="vertical-timeline-element-subtitle">Brgy. Sulonog, Alimodian, Iloilo</h4>
        <img src={school5} alt="Western Institute of Technology" className="school-image" />
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
