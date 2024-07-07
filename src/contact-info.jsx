import React from 'react';
import { Slide } from 'react-awesome-reveal'; 

function ContactInfo() {
    return (
        <div className="container-info">
            <div className="leftColumn">
                <Slide direction="left" delay={200} triggerTwice>
                    <p>"As an aspiring developer, adept at swiftly adapting to new technologies and driven by a passion for continuous learning, proficiency and agility define my approach to software development. Eager to innovate and grow, commitment to mastering the craft and making impactful contributions in this dynamic field are paramount. "</p>
                </Slide>
            </div>
            <div className="rightColumn">
                <Slide direction="right" delay={200} triggerTwice>
                    <h2>Contact Information</h2>
                    <p>Facebook: <a href="https://www.facebook.com/aint.panoy">Jan Rasheed Calderon</a></p>
                    <p>Instagram: <a href="https://www.instagram.com/josepanoy/">Jose Panoy</a></p>
                    <p>LinkedIn: <a href="www.linkedin.com/in/jan-rasheed-c-calderon-2101a42a1"> LinkedIn Account</a></p>
                    <p>Contact #: +639162937570</p>
                </Slide>
            </div>
        </div>
    );
}

export default ContactInfo;
