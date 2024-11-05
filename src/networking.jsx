import React from 'react';
import "../src/assets/css/networking.css";
import badge4 from "../src/assets/img/cisco/1.png";
import badge1 from "../src/assets/img/cisco/2.png";
import badge3 from "../src/assets/img/cisco/3.png";
import badge2 from "../src/assets/img/cisco/4.png";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Networking() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const fadeInFromBottom1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
        delay: 300,
    });

    const fadeInFromBottom2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
        delay: 500,
    });

    const fadeInFromBottom3 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
        delay: 700,
    });

    const fadeInFromBottom4 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
        delay: 900,
    });
    const fadeInFromBottom5 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1200 },
        delay: 900,
    });

    return (
        <>
            <h2 className="networking-h2" style={{ marginBottom: '50px' }}>Cisco Credentials</h2>
            <div className="networking-badges" ref={ref}>
                <animated.div style={fadeInFromBottom1} className="networking-badge-container">
                    <img src={badge1} alt="Badge 1" className="networking-badge" />
                </animated.div>
                <animated.div style={fadeInFromBottom2} className="networking-badge-container">
                    <img src={badge2} alt="Badge 2" className="networking-badge" />
                </animated.div>
                <animated.div style={fadeInFromBottom3} className="networking-badge-container">
                    <img src={badge3} alt="Badge 3" className="networking-badge" />
                </animated.div>
                <animated.div style={fadeInFromBottom4} className="networking-badge-container">
                    <img src={badge4} alt="Badge 4" className="networking-badge" />
                </animated.div>
            </div>
            <animated.h4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '30px', ...fadeInFromBottom5 }}>
                <a href="https://www.credly.com/users/jan-rasheed-calderon-calderon" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="networking-link">
                    See more of my skills wallet....
                </a>
            </animated.h4>
        </>
    );
}

export default Networking;
