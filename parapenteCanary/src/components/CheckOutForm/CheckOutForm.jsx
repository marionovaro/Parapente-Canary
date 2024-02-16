import axios from "axios"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import { useState } from "react"
import { ThreeDots } from 'react-loader-spinner'
import "./CheckOutForm.css"

export const CheckOutForm = () => {
  const stripe = useStripe()
  const elements = useElements() //? nos permite acceder a los elementos de stripe
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    console.log("submitted")
    e.preventDefault(); //? evita que se pueda refrescar la pagina

    const {error, paymentMethod} = await stripe.createPaymentMethod({ //? esto puede acabar dando o un error, o un payment method
      type: "card",
      card: elements.getElement(CardElement) //? de todos los elementos, estamos pillando uno en concreto
    })
    setLoading(true) //? acabamos de enviar la info y estamos esperando a que se procese, no debemos clickar otra vez

    if (!error) { //? si no hay error (ha ido bien) 
      const { id } = paymentMethod //? es un objeto con datos sobre la operacion, entre los cuales esta el id que debemos devolver a stripe para que lo guarde

      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/checkout", 
          {
            id,
            amount: 15000 //? ponemos el precio en centimos
          }
        );
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error)
      }
      setLoading(false) //? hemos acabado de cargar por lo tanto lo quitamos
    }
  }
  return (
    <form className="payment-card" onSubmit={handleSubmit}>
      <img 
        src="https://www.parapentevalledebravo.com/templates/yootheme/cache/vuelosparapentevalledebravo-explorer4x3-600-3142bd86.jpeg" 
        alt="compra vuelo en parapente" 
        className="payment-card-image"
      />
      {/* <h3>150€</h3> */}
      <CardElement/>
      <button disabled={!stripe}>
        {loading ? (<div id="loading-button">
        <ThreeDots
          visible={true}
          height="50"
          width="50"
          color="#fff"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="spinner-buy-button"
        />
        <h4>Loading</h4></div>) : "Comprar"}
      </button>
    </form>
  )
}