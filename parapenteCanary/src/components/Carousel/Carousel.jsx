
import React from "react";
import Slider from "react-slick";
import { data } from "../../data/carouseldata";
import { CarouselCard } from "../CarouselCard/CarouselCard";
import "./Carousel.css"

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="slider-container">
        <h2 id="slider-section-title">¿Por qué escogernos?</h2>
      <Slider {...settings}>
        {data.map((card) => {
          return (
            <CarouselCard key={card.title} title={card.title} img={card.img} description={card.description}/>
            
          )
        })}
      </Slider>
    </section>
  );
}