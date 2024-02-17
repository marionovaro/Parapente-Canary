import axios from "axios"
import { CardElement, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"

import { useState } from "react"
import { ThreeDots } from 'react-loader-spinner'
import "./CheckOutForm.css"

export const CheckOutForm = () => {
  // const stripe = useStripe()
  // const elements = useElements() //? nos permite acceder a los elementos de stripe
  // const [loading, setLoading] = useState(false)

  // const handleSubmit = async (e) => {
  //   console.log("submitted")
  //   e.preventDefault(); //? evita que se pueda refrescar la pagina

  //   const {error, paymentMethod} = await stripe.createPaymentMethod({ //? esto puede acabar dando o un error, o un payment method
  //     type: "card",
  //     card: elements.getElement(CardElement) //? de todos los elementos, estamos pillando uno en concreto
  //   })
  //   setLoading(true) //? acabamos de enviar la info y estamos esperando a que se procese, no debemos clickar otra vez

  //   if (!error) { //? si no hay error (ha ido bien) 
  //     const { id } = paymentMethod //? es un objeto con datos sobre la operacion, entre los cuales esta el id que debemos devolver a stripe para que lo guarde

  //     try {
  //       const { data } = await axios.post(
  //         "http://localhost:3000/api/checkout", 
  //         {
  //           id,
  //           amount: 15000 //? ponemos el precio en centimos
  //         }
  //       );
  //       elements.getElement(CardElement).clear();
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     setLoading(false) //? hemos acabado de cargar por lo tanto lo quitamos
  //   }
  // }
  // return (
  //   <form className="payment-card" onSubmit={handleSubmit}>
  //     <img 
  //       src="https://www.parapentevalledebravo.com/templates/yootheme/cache/vuelosparapentevalledebravo-explorer4x3-600-3142bd86.jpeg" 
  //       alt="compra vuelo en parapente" 
  //       className="payment-card-image"
  //     />
  //     {/* <h3>150€</h3> */}
  //     {/* <CardElement/> */}
  //     <PaymentElement/>
  //     <button disabled={!stripe}>
  //       {loading ? (<div id="loading-button">
  //       <ThreeDots
  //         visible={true}
  //         height="50"
  //         width="50"
  //         color="#fff"
  //         radius="9"
  //         ariaLabel="three-dots-loading"
  //         wrapperStyle={{}}
  //         wrapperClass="spinner-buy-button"
  //       />
  //       <h4>Loading</h4></div>) : "Comprar"}
  //     </button>
  //   </form>
  // )

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch("/create-intent", {
      method: "POST",
    });

    const {client_secret: clientSecret} = await res.json();

    // Confirm the PaymentIntent using the details collected by the Payment Element
    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:5173/compra/successfulpayment',
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      handleError(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || loading}>
        Submit Payment
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}