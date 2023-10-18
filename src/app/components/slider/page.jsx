"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContent from '../sliderContent/page'

const MySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  return (
    <>
      <div className="my-10 max-w-7xl px-10 lg:px-20">
        <h3 className="font-extrabold ">Naše reference</h3>
        <h1 className="text-4xl text-sea-green font-bold">
          Co o nás říkají klienti
        </h1>
      </div>
      <div className="no-flex lg:flex justify-between items-center my-10 max-w-7xl  px-10 lg:px-20">
        <Slider {...settings}>
          <div>
            <SliderContent />
          </div>
        </Slider>
      </div>
      <div  className="flex justify-center items-center">
        <button className=' border-2 border-sea-green rounded-3xl py-2 px-6 text-sea-green font- semibold'>Všechny prodejny</button>
      </div>
    </>
  );
};

export default MySlider;
