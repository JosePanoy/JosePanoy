import React from 'react';
import { Fade } from 'react-reveal';


function ContactInfo() {
    return (
        <div className="container-info">
            <Fade left>
                <div className="leftColumn">
                    <p>"As an aspiring developer, adept at swiftly adapting to new technologies and driven by a passion for continuous learning, proficiency and agility define my approach to software development. Eager to innovate and grow, commitment to mastering the craft and making impactful contributions in this dynamic field are paramount. "</p>
                </div>
            </Fade>
            <Fade right>
                <div className="rightColumn">
                    <h2>Contact Information</h2>
                    <p>Facebook: <a href="https://www.facebook.com/aint.panoy">Jan Rasheed Calderon</a></p>
                    <p>Instagram: <a href="https://www.instagram.com/josepanoy/">Jose Panoy</a></p>
                    <p>LinkedIn: <a href="www.linkedin.com/in/jan-rasheed-c-calderon-2101a42a1"> LinkedIn Account</a></p>
                    <p>Contact #: +639162937570</p>
                </div>
            </Fade>
        </div>
    );
}

export default ContactInfo;
