import "./App.css"
import { BuyButton, Carousel, CloudSeparator, FAQ, Flight, LandingPage, Testimonial } from "./components"

const App = () => {
  return (
    <div id="app-container">
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
    </div>
  )
}

export default App