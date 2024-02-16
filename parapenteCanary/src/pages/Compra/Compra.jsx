import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { Elements, CardElement, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"

import {CSpinner} from "@coreui/react"
import "bootswatch/dist/litera/bootstrap.min.css"
import "./Compra.css"
import { useState } from "react"

//? nos estamos conectando a Stripe, esta clave nos la dan cuando hacemos el registro en Stripe
const stripePromise = loadStripe("pk_test_51OkONdKjqtTHurvUtex6Vr0Mm4xmEdLpzqZjL5OKUfgdE79YbASXP7dQl9F65QOfDIeVlhScU3OEexYWkMvS2IuG00aoNBt41J")


export const Compra = () => {

  const CheckOutForm = () => {
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
      setLoading(true) //? estamos esperando a que cargue el elemento de input

      if (!error) { //? si no hay error (ha ido bien) 
        const { id } = paymentMethod //? es un objeto con datos sobre la operacion, entre los cuales esta el id que debemos devolver a stripe para que lo guarde

        try {
          const {data} = await axios.post(
            "http://localhost:3000/api/checkout", 
            {
              id,
              amount: 15000
            }
          );
          // elements.getElement(CardElement).clear();
        } catch (error) {
          console.log(error)
          res.json({message: error})
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
          {loading ? (<div id="loading-button"><CSpinner component="span" variant="grow" size="sm" aria-hidden="true"/> <h4>Loading</h4></div>) : "Comprar"}
        </button>
      </form>
    )
  }

  return (
    <div id="shop-page">
    {/* <h1>Hola</h1> */}
    <Elements stripe={stripePromise}>
      <div className="payment-card-wrapper">
        <CheckOutForm/>
      </div>
    </Elements>
    </div>
  )
}