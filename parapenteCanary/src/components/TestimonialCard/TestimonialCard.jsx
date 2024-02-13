import "./TestimonialCard.css"

export const TestimonialCard = ({name, image, comment, review}) => {

  return (
    <article className="single-testimonial">
      <img className="single-testimonial-image" src={image} alt={`${name}'s review`}/>
      <p className="single-testimonial-comment">{comment}</p>
      {/* <h3>{review}</h3> */}
    </article>
  )
}