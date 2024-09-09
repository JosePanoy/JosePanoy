import React from 'react';
import './assets/css/about-content.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import FBlogo from '../src/assets/sociallogo/facebook.png';
import Instalogo from '../src/assets/sociallogo/instagram.png';
import Githublogo from '../src/assets/sociallogo/github.png';
import LinkedInlogo from '../src/assets/sociallogo/linkedin.png';

function AboutContent() {
  const { ref, inView } = useInView({
    triggerOnce: false,  
    threshold: 0.1,  
});

const fadeInLeft = (index) => useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: { duration: 600 },
    delay: index * 200, 
    reset: true,       
});

    return (
        <div className="aboutcontent-container">
            <animated.div ref={ref} style={fadeInLeft(0)} className="aboutcontent">
            <animated.p>
                Hi, I'm <span class="underline-name">Jan Rasheed C. Calderon</span>, a web developer from Brgy. Sulong, Alimodian, Iloilo with a degree in Bachelor of Science in Information Technology, focusing on front-end development. My passion for creating engaging and user-friendly web experiences drives my work, and I specialize in crafting clean, responsive interfaces that bring ideas to life. Throughout my studies and professional journey, I’ve developed a strong foundation in modern web technologies and design principles, allowing me to deliver high-quality solutions tailored to user needs.
                <br /><br />
                Outside of web development, I’m an avid football enthusiast. Whether it’s playing on the field or following the latest matches, football keeps me energized and balanced. This hobby not only provides a great outlet for relaxation but also inspires my approach to teamwork and strategy in my professional projects.
            </animated.p>





            </animated.div>
            <div className="social-section">
                <p className="social-caption">
                    You can visit me on these platforms:
                </p>
                <div className="social-icons">
                    <animated.a href="https://www.facebook.com/aint.panoy" target="_blank" rel="noopener noreferrer" style={fadeInLeft(1)}>
                        <img src={FBlogo} alt="Facebook" className="social-icon" />
                    </animated.a>
                    <animated.a href="https://www.instagram.com/josepanoy/" target="_blank" rel="noopener noreferrer" style={fadeInLeft(2)}>
                        <img src={Instalogo} alt="Instagram" className="social-icon" />
                    </animated.a>
                    <animated.a href="https://github.com/JosePanoy" target="_blank" rel="noopener noreferrer" style={fadeInLeft(3)}>
                        <img src={Githublogo} alt="Github" className="social-icon" />
                    </animated.a>
                    <animated.a href="https://www.linkedin.com/in/janrasheed-calderon/" target="_blank" rel="noopener noreferrer" style={fadeInLeft(4)}>
                        <img src={LinkedInlogo} alt="LinkedIn" className="social-icon" />
                    </animated.a>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
