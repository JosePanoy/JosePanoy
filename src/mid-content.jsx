import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import TopRight from './assets/img/1.jpg';
import TopLeft from './assets/img/7.jpg';
import MidRight from './assets/img/11.jpeg';
import MidLeft from './assets/img/8.jpg';
import VidRight from './assets/img/vid1.mp4';
import VidLeft from './assets/img/vid2.mp4';

function MidContent() {
    return (
        <div className="midContainer">
            <Slide direction='right' delay={400}  triggerTwice>
                <div className="topleft">
                    <img src={TopLeft} alt="" />
                    <div className="caption">Roadtrips!</div>
                </div>
            </Slide>
            <Slide direction='right' delay={400}  triggerTwice>
                <div className="topright">
                    <img src={TopRight} alt="" />
                    <div className="caption">School Boy</div>
                </div>
            </Slide>
            <Fade direction="left" triggerTwice>
                <div className="botright">
                    <video src={VidRight} controls />
                    <div className="caption">Nice Attempt</div>
                </div>
            </Fade>
            <Fade direction="left" triggerTwice>
                <div className="botright">
                    <video src={VidLeft} controls />
                    <div className="caption">Gooaal!</div>
                </div>
            </Fade>
            <Fade direction="left" triggerTwice>
                <div className="midleft">
                    <img src={MidLeft} alt="" />
                    <div className="caption">Fam!</div>
                </div>
            </Fade>
            <Fade direction="right" triggerTwice>
                <div className="midright">
                    <img src={MidRight} alt="" />
                    <div className="caption">SoftDev OJT Mates!</div>
                </div>
            </Fade>
        </div>
    );
}

export default MidContent;