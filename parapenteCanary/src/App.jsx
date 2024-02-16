import { Outlet } from "react-router-dom"
import "./App.css"
import { Footer, Header } from "./components"

const App = () => {
  return (
    <>
      <Header/>
      <main id="app-container">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App