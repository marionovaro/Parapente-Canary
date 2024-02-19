// import { loadStripe } from "@stripe/stripe-js"
// import { Elements } from "@stripe/react-stripe-js"

// import { CheckOutForm } from "../../components"
// import "./Compra.css"

// //? nos estamos conectando a Stripe, esta clave nos la dan cuando hacemos el registro en Stripe
// const stripePromise = loadStripe("pk_test_51OkONdKjqtTHurvUtex6Vr0Mm4xmEdLpzqZjL5OKUfgdE79YbASXP7dQl9F65QOfDIeVlhScU3OEexYWkMvS2IuG00aoNBt41J")

// export const Compra = () => {

//   (async () => {
//     const response = await fetch("/secret");
//     const { client_secret: clientSecret } = await response.json();
//   })

//   const options = {
//     clientSecret: clientSecret
//   }
//   return (
//     <div id="shop-page">
//     {/* <h1>Hola</h1> */}
//     <Elements stripe={stripePromise} options={options}>
//       <div className="payment-card-wrapper">
//         <CheckOutForm/>
//       </div>
//     </Elements>
//     </div>
//   )
// }