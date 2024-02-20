import { Elements } from "@stripe/react-stripe-js"
import { PaymentStatus } from "../../components"
import "./SuccessfulPayment.css"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51OkONdKjqtTHurvUtex6Vr0Mm4xmEdLpzqZjL5OKUfgdE79YbASXP7dQl9F65QOfDIeVlhScU3OEexYWkMvS2IuG00aoNBt41J") //? hay que llamar a loadstripe fuera de la función para evitar que se recree el stripe en cada render

export const SuccessfulPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentStatus/>
    </Elements>
  )
}