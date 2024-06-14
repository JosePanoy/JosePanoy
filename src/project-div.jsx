import React from 'react';
import './assets/css/projectdiv.css';
import MainPicture from './assets/img/18.png';
import { Fade } from 'react-awesome-reveal'; 

function SideProjects() {
    return (
        <div className="project-container">
            {/* Use Fade from react-awesome-reveal */}
            <Fade direction="left" delay={200}>
                <div className="project-item" style={{backgroundImage: `url(${MainPicture})`}} data-title="WIT Online Library System (2024)"></div>
            </Fade>
            <Fade direction="right" delay={300}>
                <div className="project-item" data-title="Project 2">Project 2</div>
            </Fade>
            <Fade direction="left" delay={400}>
                <div className="project-item" data-title="Project 3">Project 3</div>
            </Fade>
            <Fade direction="right" delay={500}>
                <div className="project-item" data-title="Project 4">Project 4</div>
            </Fade>
            <Fade direction="left" delay={400}>
                <div className="project-item" data-title="Project 5">Project 5</div>
            </Fade>
            <Fade direction="right" delay={400}>
                <div className="project-item" data-title="Project 6">Project 6</div>
            </Fade>
            <Fade direction="left" delay={400}>
                <div className="project-item" data-title="Project 7">Project 7</div>
            </Fade>
            <Fade direction="right" delay={400}>
                <div className="project-item" data-title="Project 8">Project 8</div>
            </Fade>
        </div>
    );
}

export default SideProjects;
