import React from 'react';
import './assets/css/about-content.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function AboutContent() {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
      });
    
      const fadeInLeft1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100px)' },
        config: { duration: 850 },
        reset: true,
      });

      const fadeInRight1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100px)' },
        config: { duration: 900 },
        reset: true,
      });



    return (
        
        <animated.div ref={ref} style={fadeInLeft1} className="aboutcontent">
            
            <animated.p style={fadeInRight1}>
                Hi, I'm Jan Rasheed C. Calderon, a web developer from Brgy. Sulong, Alimodian, Iloilo with a degree in Bachelor of Science in Information Technology, focusing on front-end development. My passion for creating engaging and user-friendly web experiences drives my work, and I specialize in crafting clean, responsive interfaces that bring ideas to life. Throughout my studies and professional journey, I’ve developed a strong foundation in modern web technologies and design principles, allowing me to deliver high-quality solutions tailored to user needs.
                <br /><br />
                Outside of web development, I’m an avid football enthusiast. Whether it’s playing on the field or following the latest matches, football keeps me energized and balanced. This hobby not only provides a great outlet for relaxation but also inspires my approach to teamwork and strategy in my professional projects.
            </animated.p>
           
        </animated.div>
       
    );
}

export default AboutContent;
