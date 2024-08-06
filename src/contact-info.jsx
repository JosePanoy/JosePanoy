import React from 'react';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function ContactInfo() {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
      });

      const fadeInFromBottom1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
      });

    const fadeInLeft1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-50px)' },
        config: { duration: 1000, easing: easings.linear },
        reset: true,
      });

      const fadeInRight1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(200px)' },
        config: { duration: 1000 },
        reset: true,
      });


    return (
        <animated.div ref={ref} style={fadeInFromBottom1} className="container-info">
            <animated.div style={fadeInLeft1} className="leftColumn">
              
                    <p>"As an aspiring developer, adept at swiftly adapting to new technologies and driven by a passion for continuous learning, proficiency and agility define my approach to software development. Eager to innovate and grow, commitment to mastering the craft and making impactful contributions in this dynamic field are paramount. "</p>
               
            </animated.div>
            <animated.div style={fadeInRight1} className="rightColumn">
             
                    <h2>Contact Information</h2>
                    <p>Facebook: <a href="https://www.facebook.com/aint.panoy">Jan Rasheed Calderon</a></p>
                    <p>Instagram: <a href="https://www.instagram.com/josepanoy/">Jose Panoy</a></p>
                    <p>LinkedIn: <a href="www.linkedin.com/in/jan-rasheed-c-calderon-2101a42a1"> LinkedIn Account</a></p>
                    <p>Contact #: +639162937570</p>
               
            </animated.div>
        </animated.div>
    );
}

export default ContactInfo;
