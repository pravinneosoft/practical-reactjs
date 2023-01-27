import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.scss";
const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (

    <Slider {...settings} className="hero__slider main-div">
    
      <div className="slider__item slider__item-01 mt0">
        <div className="container ">
        
          <div className="slider__content ">
            <h4 className="text-light small-text mb-3">lorem</h4>
            <h1 className="text-light mb-4 slider-title">Do something  amazing
 for your family today</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Go to: Prosperous Life Funerals</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <div className="container ">
        <div className="slider__content ">
            <h4 className="text-light small-text mb-3">lorem</h4>
            <h1 className="text-light mb-4 slider-title">Do something  amazing
 for your family today</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Go to: Prosperous Life Funerals</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <div className="container ">
        <div className="slider__content ">
            <h4 className="text-light small-text mb-3">lorem</h4>
            <h1 className="text-light mb-4 slider-title">Do something  amazing
 for your family today</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Go to: Prosperous Life Funerals</Link>
            </button>
          </div>
        </div>
      </div>
      
    </Slider>
    
  );
};

export default HeroSlider;
