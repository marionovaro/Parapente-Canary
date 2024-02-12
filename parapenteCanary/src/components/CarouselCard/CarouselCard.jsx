import "./CarouselCard.css"

export const CarouselCard = ({title, img, description}) => {
  return (
    <swiper-slide>
      <div className="carousel-card swiper-slide">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p className="carousel-card-description">{description}</p>
      </div>
    </swiper-slide>
  )
}