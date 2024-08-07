import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './assets/css/midcontent.css';

import TopRight from './assets/img/1.jpg';
import TopLeft from './assets/img/7.jpg';
import MidRight from './assets/img/11.jpeg';
import MidLeft from './assets/img/8.jpg';
import VidRight from './assets/img/vid1.mp4';
import VidLeft from './assets/img/vid2.mp4';

function MidContent() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const fadeInLeft1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100px)' },
        config: { duration: 1500 },
        reset: true,
    });

    const fadeInRight1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(100px)' },
        config: { duration: 3000 },
        reset: true,
    });

    const fadeInLeft2 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100px)' },
        config: { duration: 3500 },
        reset: true,
    });

    return (
        <div ref={ref} className="grid-container">
            <animated.div style={fadeInLeft1} className="grid-item">
                <img src={TopLeft} alt="" />
                <div className="caption">Roadtrips!</div>
            </animated.div>
            <animated.div style={fadeInLeft1} className="grid-item">
                <img src={TopRight} alt="" />
                <div className="caption">School Boy</div>
            </animated.div>
            <animated.div style={fadeInRight1} className="grid-item">
                <video src={VidRight} controls />
                <div className="caption">Nice Attempt</div>
            </animated.div>
            <animated.div style={fadeInRight1} className="grid-item">
                <video src={VidLeft} controls />
                <div className="caption">Gooaal!</div>
            </animated.div>
            <animated.div style={fadeInLeft2} className="grid-item">
                <img src={MidLeft} alt="" />
                <div className="caption">Fam!</div>
            </animated.div>
            <animated.div style={fadeInLeft2} className="grid-item">
                <img src={MidRight} alt="" />
                <div className="caption">SoftDev OJT Mates!</div>
            </animated.div>
        </div>
    );
}

export default MidContent;
