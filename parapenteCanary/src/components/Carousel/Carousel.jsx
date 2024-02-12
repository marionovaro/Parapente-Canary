
import React from "react";
import Slider from "react-slick";
import { data } from "./CarouselData";
import { CarouselCard } from "../CarouselCard/CarouselCard";
import "./Carousel.css"

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((card) => {
          return (
            <CarouselCard title={card.title} img={card.img} description={card.description}/>
          )
        })}
      </Slider>
    </div>
  );
}