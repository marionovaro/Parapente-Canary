import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import { CheckOutForm } from "../../components"
import "./Compra.css"
import { CheckOutForm } from "../../components/CheckOutForm/CheckOutForm";

const stripePromise = loadStripe("pk_test_51OkONdKjqtTHurvUtex6Vr0Mm4xmEdLpzqZjL5OKUfgdE79YbASXP7dQl9F65QOfDIeVlhScU3OEexYWkMvS2IuG00aoNBt41J") //? hay que llamar a loadstripe fuera de la función para evitar que se recree el stripe en cada render

export const Compra = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => { //? creamos un intent nada más cargar nuestra pantalla de checkout, y cogemos el clientSecret del backend (lo necesitamos en el front)
    const fetchPayment = fetch("http://localhost:3000/create-payment-intent", { //? vamos al endpoint que hemos seteado al hacer el intent en el back
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
     },
      body: JSON.stringify({ items: [{ id: "vuelo-parapente"}]}),
    })
    .then((res) => res.json()) 
    .then((data) => setClientSecret(data.clientSecret)); //? seteamos el clientSecret como estado
  }, [])

  //? ------- OPCIONES Y APARIENCIA ---------
  const appearance = {
    theme: "night",
    // labels: "floating",
    variables: {
      // colorPrimary: "#FE981E",
    }
  }

  const options = {
    clientSecret,
    appearance
  }


  return (
    <div id="shop-page">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm/>
        </Elements>
      )}
    </div>
  )
}