import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './assets/img/1.jpg';
import image2 from './assets/img/2.jpg';
import image3 from './assets/img/3.jpg';
import image4 from './assets/img/4.jpg';
import image5 from './assets/img/5.jpg';
import './assets/css/about.css';

const AboutSlider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="main-container"> {/* Apply main-container class here */}
      <div className="slider-container"> {/* Apply slider-container class here */}
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" />
          </div>
          <div>
            <img src={image2} alt="Slide 2" />
          </div>
          <div>
            <img src={image3} alt="Slide 3" />
          </div>
          <div>
            <img src={image4} alt="Slide 4" />
          </div>
          <div>
            <img src={image5} alt="Slide 5" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutSlider1;
