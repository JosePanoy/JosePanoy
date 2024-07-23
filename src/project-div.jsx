import React from 'react';
import './assets/css/projectdiv.css';
import MainPicture from './assets/img/18.png';
import TodolistPic from './assets/img/todolist.gif'
import CalculatorPic from './assets/img/calculator.gif'
import RecipeFinder from './assets/img/cooking.gif'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

function SideProjects() {
    return (
        <div className="project-container">
            <Fade direction="left" delay={200}>
                <div className="project-item" style={{backgroundImage: `url(${MainPicture})`}} data-title="WIT Online Library System (2024)"></div>
            </Fade>
            <Fade direction="right" delay={300}>
                <Link to="/todolist" style={{backgroundImage: `url(${TodolistPic})`}} className="project-item" data-title="TodoList"></Link>
            </Fade>
            <Fade direction="left" delay={400}>
            <Link to="/calculator" style={{backgroundImage: `url(${CalculatorPic})`}} className="project-item" data-title="Calculator"></Link>
            </Fade>
            <Fade direction="right" delay={500}>
            <Link to="/recipefinder" style={{backgroundImage: `url(${RecipeFinder})`}} className="project-item" data-title="Recipe Finder"></Link>
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
