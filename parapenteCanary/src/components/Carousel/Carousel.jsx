import "./Carousel.css"
import { data } from "./CarouselData"
import { CarouselCard } from "../index"
import React, { useEffect, useRef } from 'react';

// export const Carousel = () => {
//   return (
//     <swiper-container 
//       ref={swiperElRef}
//       navigation="true"
//       pagination="true" 
//       slides-per-view="6" 
//       speed="500" 
//       loop="true" 
//       css-mode="true">
//         {data.map((card) => {
//           return (
//             <CarouselCard title={card.title} img={card.img} description={card.description}/>
//           )
//         })}
//     </swiper-container>
//   )
// }

// import React from "react";
import Slider from "react-slick";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="single-slide first-slide">
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}
