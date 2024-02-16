import "./Header.css"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()
  return (
    <section id="header-container">
      <div id="logo-container" onClick={() => navigate("/")}>Logo</div>
      <nav id="header-nav">
        <div>Inicio</div>
        <div onClick={() => navigate("/compra")}>Reservas</div>
        <div>Regalo</div>
        <div>Galería</div>
        <div>Legal</div>
      </nav>
    </section>
  )
}