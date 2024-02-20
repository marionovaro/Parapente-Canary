import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); //? lo utilizaremos para deshabilitar botones y estas cosas

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

    if (!clientSecret) {
      return;
    }

    //? ------- MOSTRAR MENSAJES AL CLIENTE ---------
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) { //? es una de las claves del objeto paymentIntent, es para saber el estado de la operación
        case "succeeded":
          setMessage("Payment succeeded")
          break;

        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break;

        case "processing":
          setMessage("Your payment is processing")
          break;
    
        default:
          setMessage("Something went wrong")
          break;
      }
    });
  }, [stripe])

  //? -------- EVENTO AL HACER CLICK ---------
  const handleSubmit = async (event) => {
    event.preventDefault(); //? evita que se pueda refrescar la pagina

    if (!stripe || !elements) { //? si stripe aún no ha cargado no se puede mostrar el botón de envío activado
      return
    }

    setIsLoading(true) //? está cargando

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/successfulpayment"
      }
    });

    if (error.type === "card_error" || error.type === "validation_error") { //? aquí solo llegará si hay un error, si no lo hay se enviará al cliente al return_url
      setMessage(error.message) //? como puedes ver, dentro de error hay claves (type, message...)
    } else {
      setMessage("An unexpected error occurred.")
    }

    setIsLoading(false) //? ya se han hecho todas las tareas al hacer click, ya no estamos cargando
  };

  //? -------- OPCIONES DE APARIENCIA ---------
  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit} >
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button id="buy-button" disabled={isLoading || !stripe || !elements}>
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Compra Ahora"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}