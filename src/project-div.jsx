import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './assets/css/projectdiv.css';
import MainPicture from './assets/img/18.png';
import TodolistPic from './assets/img/todolist.gif';
import CalculatorPic from './assets/img/calculator.gif';
import RecipeFinder from './assets/img/cooking.gif';
import MovieFind from './assets/img/movie.gif';
import CamPic from './assets/img/cam.png';
import PFHPic from './assets/img/pfh.png';
import ShoeStorePic from './assets/img/shoestore.gif';
import ServicePage from './assets/img/servicepage.gif';
import PanoySocial from './assets/mp4/panoysocial.mp4'; 
import BombersFCsite from './assets/mp4/wordpress site.mp4';
import EMSsite from '../src/assets/mp4/ems.mp4'
import { Link } from 'react-router-dom';


// import skills logo 
import ReactLogo from '../src/assets/img/logo/react.png';
import PHPLogo from '../src/assets/img/logo/php.png';
import jQueryLogo from '../src/assets/img/logo/jquery.png';
import JavascriptLogo from '../src/assets/img/logo/javascript.png';
import BootstrapLogo from '../src/assets/img/logo/bootstrap.png';
import HTMLLogo from '../src/assets/img/logo/html.png';
import CSSLogo from '../src/assets/img/logo/css.png';
import PhotoshopLogo from '../src/assets/img/logo/photoshop.png';
import IllustratorLogo from '../src/assets/img/logo/illustrator.png';
import GithubLogo from '../src/assets/img/logo/github.png';
import NodeLogo from '../src/assets/img/logo/nodejs.png';
import ExpressLogo from '../src/assets/img/logo/expressjs.png';
import MongoLogo from '../src/assets/img/logo/mongodb.png';
import WordPressLogo from '../src/assets/img/logo/wordpress.png';

function SideProjects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const fadeInFromBottom = (delay) =>
        useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(50px)',
            config: { duration: 700 },
            delay: delay,
        });

    const fadeInFromBottom1 = fadeInFromBottom(0);
    const fadeInFromBottom2 = fadeInFromBottom(200);
    const fadeInFromBottom3 = fadeInFromBottom(400);
    const fadeInFromBottom4 = fadeInFromBottom(600);
    const fadeInFromBottom5 = fadeInFromBottom(800);
    const fadeInFromBottom6 = fadeInFromBottom(1000);
    const fadeInFromBottom7 = fadeInFromBottom(1200);
    const fadeInFromBottom8 = fadeInFromBottom(1400);
    const fadeInFromBottom9 = fadeInFromBottom(1600);
    const fadeInFromBottom10 = fadeInFromBottom(1800);
    const fadeInFromBottom11 = fadeInFromBottom(2000);
    const fadeInFromBottom12 = fadeInFromBottom(2200);


    return (
        <animated.div ref={ref} className="project-container">
            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom1,
                    backgroundImage: `url(${MainPicture})`,
                }}
                data-title="WIT Online Library System (2024)"
            >
                <div className="project-details">
                    <h3 className="project-title">WIT Online Library System</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <div className="skill-icons">
                        <img src={PHPLogo} alt="PHP" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                    </div>
                    <Link to="/wit-library" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={fadeInFromBottom2}
                data-title="Panoy Social"
            >
                <video
                    className="project-video"
                    src={PanoySocial}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="project-details">
                    <h3 className="project-title">Panoy Social</h3>
                    <p className="project-progress">Progress: 70%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={ExpressLogo} alt="React" className="skill-icon" />
                        <img src={NodeLogo} alt="React" className="skill-icon" />
                        <img src={MongoLogo} alt="React" className="skill-icon" />
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                    </div>
                    <span className="project-link-disabled">
                    Visit <FaExternalLinkAlt />
                </span>
                </div>
            </animated.div>


            <animated.div
                className="project-item"
                style={fadeInFromBottom3}
                data-title="Panoy Social"
            >
                <video
                    className="project-video"
                    src={EMSsite}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="project-details">
                    <h3 className="project-title">Employee Management System Platform</h3>
                    <p className="project-progress">Progress: 40%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={ExpressLogo} alt="React" className="skill-icon" />
                        <img src={NodeLogo} alt="React" className="skill-icon" />
                        <img src={MongoLogo} alt="React" className="skill-icon" />
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                    </div>
                    <span className="project-link-disabled">
                    Visit <FaExternalLinkAlt />
                </span>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom4,
                    backgroundImage: `url(${TodolistPic})`,
                }}
                data-title="TodoList"
            >
                <div className="project-details">
                    <h3 className="project-title">TodoList</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                    </div>
                    <Link to="/todolist" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom5,
                    backgroundImage: `url(${CalculatorPic})`,
                }}
                data-title="Calculator"
            >
                <div className="project-details">
                    <h3 className="project-title">Calculator</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                    </div>
                    <Link to="/calculator" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom6,
                    backgroundImage: `url(${RecipeFinder})`,
                }}
                data-title="Recipe Finder"
            >
                <div className="project-details">
                    <h3 className="project-title">Recipe Finder</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                    </div>
                    <Link to="/recipefinder" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom7,
                    backgroundImage: `url(${MovieFind})`,
                }}
                data-title="Movie Find"
            >
                <div className="project-details">
                    <h3 className="project-title">Movie Find</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                    </div>
                    <Link to="/moviefind" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom8,
                    backgroundImage: `url(${CamPic})`,
                }}
                data-title="Christian Anthony Photos"
            >
                <div className="project-details">
                    <h3 className="project-title">Christian Anthony Photos</h3>
                    <p className="project-progress">Progress: 95%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                        <img src={PhotoshopLogo} alt="Photoshop" className="skill-icon" />
                        <img src={IllustratorLogo} alt="Illustrator" className="skill-icon" />
                    </div>
                    <a
                        href="http://caphotos.vercel.app/"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit <FaExternalLinkAlt />
                    </a>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom9,
                    backgroundImage: `url(${PFHPic})`,
                }}
                data-title="Pro Footie Hub"
            >
                <div className="project-details">
                    <h3 className="project-title">Pro Footie Hub</h3>
                    <p className="project-progress">Progress: 50%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                        <img src={PhotoshopLogo} alt="Photoshop" className="skill-icon" />
                    </div>
                    <a
                        href="http://pfh-seven.vercel.app/"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit <FaExternalLinkAlt />
                    </a>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom10,
                    backgroundImage: `url(${ShoeStorePic})`,
                }}
                data-title="Foot Flick"
            >
                <div className="project-details">
                    <h3 className="project-title">Foot Flick</h3>
                    <p className="project-progress">Progress: 60%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                        <img src={PhotoshopLogo} alt="Photoshop" className="skill-icon" />
                        <img src={IllustratorLogo} alt="Illustrator" className="skill-icon" />
                    </div>
                    <a
                        href="http://footflick.vercel.app/"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit <FaExternalLinkAlt />
                    </a>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom11,
                    backgroundImage: `url(${ServicePage})`,
                }}
                data-title="Service Page"
            >
                <div className="project-details">
                    <h3 className="project-title">Service Page</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <div className="skill-icons">
                        <img src={ReactLogo} alt="React" className="skill-icon" />
                        <img src={JavascriptLogo} alt="JavaScript" className="skill-icon" />
                        <img src={HTMLLogo} alt="HTML" className="skill-icon" />
                        <img src={CSSLogo} alt="CSS" className="skill-icon" />
                        <img src={PhotoshopLogo} alt="Photoshop" className="skill-icon" />
                    </div>
                    <a
                        href="https://servicepage-one.vercel.app/"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit <FaExternalLinkAlt />
                    </a>
                </div>
            </animated.div>


            <animated.div
                className="project-item"
                style={fadeInFromBottom12}
                data-title="Bombers FC site"
            >
                <video
                    className="project-video"
                    src={BombersFCsite}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="project-details">
                    <h3 className="project-title">Bombers FC site</h3>
                    <p className="project-progress">Progress: 40%</p>
                    <div className="skill-icons">
                        <img src={WordPressLogo} alt="Photoshop" className="skill-icon" />
                        <img src={PhotoshopLogo} alt="Photoshop" className="skill-icon" />
                        <img src={IllustratorLogo} alt="Illustrator" className="skill-icon" />
                    </div>
                    <span className="project-link-disabled">
                    Visit <FaExternalLinkAlt />
                </span>
                </div>
            </animated.div>

        </animated.div>
    );
}

export default SideProjects;
