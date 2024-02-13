import "./CarouselCard.css"

export const CarouselCard = ({title, img, description}) => {
  return (
    <div className="carousel-card">
      <img className="carousel-card-image" src={img} alt={title} />
      <h3 className="carousel-card-title" >{title}</h3>
      <p className="carousel-card-description">{description}</p>
    </div>
  )
}