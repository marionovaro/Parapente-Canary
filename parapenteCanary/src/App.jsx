import "./App.css"
import { BuyButton, Carousel, CloudSeparator, Flight, LandingPage, Testimonial } from "./components"

const App = () => {
  return (
    <div id="app-container">
      <LandingPage/>
      <Flight/>
      <BuyButton/>
      <CloudSeparator position="start"/>
      <div id="full-width-slider-section">
        <Carousel/>
      </div>
      <CloudSeparator position="end"/>
      <Testimonial/>
    </div>
  )
}

export default App