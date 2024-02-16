import { BuyButton, Carousel, CloudSeparator, FAQ, Flight, LandingPage, Testimonial } from "../../components/index"
import "./MainPage.css"

export const MainPage = () => {

  return (
    <>
      <LandingPage/>
      <Flight/>
      <CloudSeparator position="start"/>
      <BuyButton/>
      <div id="full-width-slider-section">
        <Carousel/>
      </div>
      <CloudSeparator position="end"/>
      <Testimonial/>
      <FAQ/>
    </>
  )
}