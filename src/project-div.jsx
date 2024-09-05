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
import PanoySocial from './assets/mp4/panoysocial.mp4'; // Video Import
import { Link } from 'react-router-dom';

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
                    <a
                        href="http://panoysocial.vercel.app/"
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
                    ...fadeInFromBottom3,
                    backgroundImage: `url(${TodolistPic})`,
                }}
                data-title="TodoList"
            >
                <div className="project-details">
                    <h3 className="project-title">TodoList</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <Link to="/todolist" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom4,
                    backgroundImage: `url(${CalculatorPic})`,
                }}
                data-title="Calculator"
            >
                <div className="project-details">
                    <h3 className="project-title">Calculator</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <Link to="/calculator" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom5,
                    backgroundImage: `url(${RecipeFinder})`,
                }}
                data-title="Recipe Finder"
            >
                <div className="project-details">
                    <h3 className="project-title">Recipe Finder</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <Link to="/recipefinder" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom6,
                    backgroundImage: `url(${MovieFind})`,
                }}
                data-title="Movie Find"
            >
                <div className="project-details">
                    <h3 className="project-title">Movie Find</h3>
                    <p className="project-progress">Progress: 100%</p>
                    <Link to="/moviefind" className="project-link">
                        Visit <FaExternalLinkAlt />
                    </Link>
                </div>
            </animated.div>

            <animated.div
                className="project-item"
                style={{
                    ...fadeInFromBottom7,
                    backgroundImage: `url(${CamPic})`,
                }}
                data-title="Christian Anthony Photos"
            >
                <div className="project-details">
                    <h3 className="project-title">Christian Anthony Photos</h3>
                    <p className="project-progress">Progress: 90%</p>
                    <a
                        href="http://christiananthony-photos.vercel.app/"
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
                    ...fadeInFromBottom8,
                    backgroundImage: `url(${PFHPic})`,
                }}
                data-title="Pro Footie Hub"
            >
                <div className="project-details">
                    <h3 className="project-title">Pro Footie Hub</h3>
                    <p className="project-progress">Progress: 50%</p>
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
                    ...fadeInFromBottom9,
                    backgroundImage: `url(${ShoeStorePic})`,
                }}
                data-title="Foot Flick"
            >
                <div className="project-details">
                    <h3 className="project-title">Foot Flick</h3>
                    <p className="project-progress">Progress: 60%</p>
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
                    ...fadeInFromBottom9,
                    backgroundImage: `url(${ServicePage})`,
                }}
                data-title="Service Page"
            >
                <div className="project-details">
                    <h3 className="project-title">Service Page</h3>
                    <p className="project-progress">Progress: 100%</p>
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
        </animated.div>
    );
}

export default SideProjects;
