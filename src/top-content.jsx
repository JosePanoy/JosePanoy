import React from 'react';
import MainPicture from './assets/img/3.jpg';
import { Fade } from 'react-awesome-reveal'; // Import from react-awesome-reveal

function TopContent() {
    return (
        <>
            <Fade direction="up" triggerTwice>
                <div className="topContent">
                    <div className="leftSide">
                        <Fade direction="left" triggerTwice>
                            <img className="profilePic" src={MainPicture} alt="Profile Picture" />
                        </Fade>
                    </div>
                    <div className="rightSide">
                        <Fade direction="right" triggerTwice>
                            <h6>Web Developer</h6>
                        </Fade>
                        <Fade direction="right" triggerTwice>
                            <h3>Jan Rasheed</h3>
                        </Fade>
                    </div>
                </div>
            </Fade>

            <Fade direction="up" triggerTwice>
                <div className="midCaption">
                    <h3> -I am passionate about crafting interactive and user-friendly web experiences.</h3>
                    <ul></ul>
                </div>
            </Fade>
        </>
    );
}

export default TopContent;
