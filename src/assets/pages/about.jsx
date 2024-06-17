import React from 'react';
import backimg1 from '../img/2.jpg';
import backimg2 from '../img/3.jpg';
import backimg3 from '../img/4.jpg';
import backimg4 from '../img/6.jpg';
import { Fade } from 'react-awesome-reveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/about.css';

const AboutPage = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Fade direction='top' delay={200}>
      <div className="top-profile">
        <div className="image-container">
          <Fade direction='left' delay={400}>
            <Slider {...settings}>
              <div className="slider-item">
                <img src={backimg1} alt="Profile 1" />
              </div>
              <div className="slider-item">
                <img src={backimg2} alt="Profile 2" />
              </div>
              <div className="slider-item">
                <img src={backimg3} alt="Profile 3" />
              </div>
              <div className="slider-item">
                <img src={backimg4} alt="Profile 4" />
              </div>
            </Slider>
          </Fade>
        </div>
        <div className="caption-container">
          <Fade direction='right' delay={300}>
            <h2>Mixing bytes and goals ⚽🖥️</h2>
          </Fade>
          <Fade direction='right' delay={400}>
            <p>- A journey through the digital world!</p>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default AboutPage;
