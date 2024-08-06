import React from 'react';
import MainPicture from './assets/img/3.jpg';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function TopContent() {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
      });

      const fadeInFromBottom1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
      });

      const fadeInFromBottom2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 2000 },
      });
    
      const fadeInLeft1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-50px)' },
        config: { duration: 1200, easing: easings.linear },
        reset: true,
      });

      const fadeInRight1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(200px)' },
        config: { duration: 1500 },
        reset: true,
      });

      const fadeInRight2 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(0px)' },
        config: { duration: 1700 },
        reset: true,
      });



    return (
        <>
            
                <animated.div ref={ref} style={fadeInFromBottom1 } className="topContent">
                    <animated.div style={fadeInLeft1} className="leftSide">
                        
                            <animated.img  className="profilePic" src={MainPicture} alt="Profile Picture" />
                      
                    </animated.div>
                    <animated.div className="rightSide">
                    
                            <animated.h6 style={fadeInRight1}>Web Developer</animated.h6>
                      

                            <animated.h3 style={fadeInRight1}>Jan Rasheed</animated.h3>
                       
                    </animated.div>
                </animated.div>
        

                <animated.div style={fadeInFromBottom2} className="midCaption">
                    <h3> -I am passionate about crafting interactive and user-friendly web experiences.</h3>
                    <ul></ul>
                </animated.div>
         
        </>
    );
}

export default TopContent;
