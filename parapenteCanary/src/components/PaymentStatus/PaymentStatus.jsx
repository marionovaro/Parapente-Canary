import React, {useState, useEffect} from 'react';
import {useStripe} from '@stripe/react-stripe-js';

export const PaymentStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    //? en el url de la pagina que damos como return_url hay dos parametros que podemos usar para buscar el intent de pago
    //? usamos uno de los 2 (payment_intent_client_secret o payment_intent) y lo usamos para el "retrieve"
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    //? hacemos el retrieve con lo dado por el url
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        //? miramos cual es el estado (.status) del intent de pago. puede ser exito o fracaso, o en un estado de proceso si se ha redirigido a algun banco o algo asi
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Felicidades! Vuelo comprado');
            break;

          case 'processing':
            setMessage("Transacción en proceso. Te avisaremos en cuando recibamos el pago");
            break;

          case 'requires_payment_method':
            //? debemos redirigir al cliente a la página de checkout para intentar hacer el pago de nuevo
            setMessage('Pago fallido. Por favor intente otro método de pago');
            break;

          default:
            setMessage('Algo no funcionó...');
            break;
        }
      });
  }, [stripe]);


  return (
      <h1>{message}</h1>
  );
}