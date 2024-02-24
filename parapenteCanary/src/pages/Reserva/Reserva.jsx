import { useState } from "react"
import "./Reserva.css"

export const Reserva = () => {
  const [hora, setHora] = useState()

  return (
    <div id="reserva-page">
      <div id="reserva-image-container">

      </div>
      <form action="submit" id="client-info-form">
        <div className="input-container">
          Fecha
          <input type="text" />
        </div>
        <div className="input-container radio-div">
          Hora de recogida
          <div id="button-radio-container">
            <button onClick={() => setHora("9")}>9AM</button>
            <button onClick={() => setHora("12")}>12AM</button>
            <button onClick={() => setHora("15")}>3PM</button>
          </div>
        </div>
        <div className="input-container">
          Email
          <input type="text" />
        </div>
        <div className="input-container">
          Número de Teléfono
          <input type="text" />
        </div>
        <div className="input-container">
          Peso (mínimo: 40kg; máximo: 100kg)
          <input type="text" />
        </div>
        <div className="input-container">
          Cantidad
          <input type="text" />
        </div>
        <button>
          Ir al pago
        </button>
      </form>
    </div>
  )
}