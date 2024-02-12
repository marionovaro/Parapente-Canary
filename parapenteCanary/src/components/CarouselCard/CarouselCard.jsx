import "./CarouselCard.css"

export const CarouselCard = ({title, img, description}) => {
  return (
    <div className="carousel-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p className="carousel-card-description">{description}</p>
    </div>
  )
}