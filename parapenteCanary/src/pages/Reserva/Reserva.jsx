import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

import "./Reserva.css"

export const Reserva = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const [isSent, setIsSent] = useState()
  const [res, setRes] = useState()

  const formSubmit = () => {
    setIsSent(true)
    setRes()
    setIsSent(false)
  }

  return (
    <div id="reserva-page">
      <div id="reserva-image-container">

      </div>
      <form action="submit" id="client-info-form" onSubmit={handleSubmit(formSubmit)}>
        <div className="input-container">
          Fecha
          <input 
            type="date"            
            { ...register("date", {required: true})}
          />
        </div>
        <div className="input-container radio-div">
          Hora de recogida
          <div id="button-radio-container">
            <input 
              type="radio"
              id="9"
              value="9"
              { ...register("time", {required: true})}
            />
            <label htmlFor="9">9AM</label>
            <input 
              type="radio"
              id="12"
              value="12"
              { ...register("time", {required: true})}
            />
            <label htmlFor="12">12AM</label>
             <input 
              type="radio"
              id="15"
              value="15"
              { ...register("time", {required: true})}
            />
            <label htmlFor="15">3PM</label>
          </div>
        </div>
        <div className="input-container">
          Nombre Completo
          <input 
            type="text"
            { ...register("name", {required: true})}
          />
        </div>
        <div className="input-container">
          Email
          <input 
            type="email"
            { ...register("email", {required: true})}
          />
        </div>
        <div className="input-container">
          Número de Teléfono
          <input 
            type="text"
            { ...register("phoneNumber", {required: true})} 
          />
        </div>
        <div className="input-container">
          Peso (mínimo: 40kg; máximo: 100kg)
          <input 
            type="number"
            { ...register("weight", {required: true})}
          />
        </div>
        <div className="input-container">
          Cantidad
          <input 
            type="text"
            { ...required("quantity", {required: true})}
          />
        </div>
        <button>
          Ir al pago
        </button>
      </form>
    </div>
  )
}