import "./App.css"
import { BuyButton, Carousel, Flight, GridReasons, LandingPage } from "./components"

const App = () => {
  return (
    <div id="app-container">
      <LandingPage/>
      <Flight/>
      <BuyButton/>
      {/* <GridReasons/> */}
      <Carousel/>
    </div>
  )
}

export default App