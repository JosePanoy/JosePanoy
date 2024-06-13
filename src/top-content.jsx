import React from 'react';
import MainPicture from './assets/img/3.jpg';
import { Fade } from 'react-awesome-reveal'; // Import from react-awesome-reveal

function TopContent() {
    return (
        <>
            <Fade direction="up" triggerOnce>
                <div className="topContent">
                    <div className="leftSide">
                        <Fade direction="left" triggerOnce>
                            <img className="profilePic" src={MainPicture} alt="Profile Picture" />
                        </Fade>
                    </div>
                    <div className="rightSide">
                        <Fade direction="right" triggerOnce>
                            <h6>Aspiring Developer</h6>
                        </Fade>
                        <Fade direction="right" triggerOnce>
                            <h3>Jan Rasheed</h3>
                        </Fade>
                    </div>
                </div>
            </Fade>

            <Fade direction="up" triggerOnce>
                <div className="midCaption">
                    <h3> -From pixels to passion.</h3>
                    <ul></ul>
                </div>
            </Fade>
        </>
    );
}

export default TopContent;
