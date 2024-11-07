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

    const fadeInFromBottom = (inView) => useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000 },
    });

    const items = [
        { src: TopLeft, caption: 'Roadtrips!' },
        { src: TopRight, caption: 'School Boy' },
        { src: VidRight, caption: 'Nice Attempt', isVideo: true },
        { src: VidLeft, caption: 'Gooaal!', isVideo: true },
        { src: MidLeft, caption: 'Fam!' },
        { src: MidRight, caption: 'SoftDev OJT Mates!' }
    ];

    return (
        <div className="grid-container">
            {items.map((item, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: false,
                    threshold: 0.1,
                    delay: index * 250, 
                });

                return (
                    <animated.div
                        key={index}
                        ref={ref}
                        style={fadeInFromBottom(inView)}
                        className="grid-item"
                    >
                        {item.isVideo ? (
                            <video 
                                src={item.src} 
                                autoPlay 
                                loop 
                                muted 
                            />
                        ) : (
                            <img src={item.src} alt="" />
                        )}
                        <div className="caption">{item.caption}</div>
                    </animated.div>
                );
            })}
        </div>
    );
}

export default MidContent;
