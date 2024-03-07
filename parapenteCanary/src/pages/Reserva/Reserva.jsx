import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { DatePicker, CounterInput } from "react-rainbow-components"

import "./Reserva.css"
import { createOrder } from "../../services/order.service";

export const Reserva = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const [isSent, setIsSent] = useState()
  const [res, setRes] = useState()
  const [date, setDate] = useState(null)
  const [counter, setCounter] = useState()

  const formSubmit = async (formData) => {
    setIsSent(true)
    setRes(await createOrder(formData))
    setIsSent(false)
  }
  
  useEffect(() => {
    if (res != undefined) {
      navigate("/compra")
    }
  }, [res])

  const onChangeDate = () => {
    setDate(date)
  }

  const containerStyles = {
    maxWidth: 220,
  };

  return (
    <div id="reserva-page">
      <h1>¡Haz tu reserva!</h1>
      <section id="reserva-page-content">
        <div id="reserva-image-container">
          <img src="https://res.cloudinary.com/dx2arqne6/image/upload/v1709744328/50_g3ylok.jpg" alt="vuelo parapente de cerca" />
        </div>
        <div id="form-container-reserva">
          <form action="submit" id="client-info-form" onSubmit={handleSubmit(formSubmit)}>
            <div className="input-container date-picker">
              Fecha (48h antelación)
              {/* <input
                type="date"            
                { ...register("date", {required: true})}
              /> */}
              <DatePicker
                id="datePicker-1"
                value={date}
                onChange={onChangeDate}
                formatStyle="large"
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
                type="number"
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
            <div className="quantity-input">
              Cantidad
              {/* <input 
                type="number"
                { ...register("quantity", {required: true})}
              /> */}
              <CounterInput
                id="input-component-1"
                placeholder="Cantidad"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                labelAlignment="center"
                value={counter}
                onChange={setCounter}
                min={1}
                max={20}
                variant="shaded"
              />
            </div>
            <button>
              Ir al pago
            </button>
          </form>
        </div>
      </section>
      
    </div>
  )
}