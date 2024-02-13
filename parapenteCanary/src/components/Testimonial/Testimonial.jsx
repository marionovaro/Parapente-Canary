import "./Testimonial.css"
import { testimonialData } from "../../data/testimonialdata"
import { TestimonialCard } from "../index"

export const Testimonial = () => {

  return (
    <section id="testimonal-section">
      <div id="testimonial-wrapper">
        {testimonialData.map((client) => {
          return (
            <TestimonialCard key={client.name} name={client.name}  image={client.image}  comment={client.comment}  review={client.review}/>
          )
        } 
        )}
      </div>
    </section>
  )
}