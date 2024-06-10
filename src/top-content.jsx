import React from 'react';
import MainPicture from './assets/img/3.jpg';
import { Fade } from 'react-reveal';

function TopContent() {
    return (
        <>
            <Fade up>
                <div className="topContent">
                    <div className="leftSide">
                        <Fade left>
                            <img className="profilePic" src={MainPicture} alt="Profile Picture" />
                        </Fade>
                    </div>
                    <div className="rightSide">
                        <Fade right>
                            <h6>Aspiring Developer</h6>
                        </Fade>
                        <Fade right>
                            <h3>Jan Rasheed</h3>
                        </Fade>
                    </div>
                </div>

                <div className="midCaption">
                    <h3> -From pixels to passion.</h3>
                    <ul></ul>
                </div>
            </Fade>
        </>
    );
}

export default TopContent;
