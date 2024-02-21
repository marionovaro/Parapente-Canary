import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import { MainPage, SuccessfulPayment, Compra, Reserva } from "../pages";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <MainPage/>
      },
      {
        path: "/compra",
        element: <Compra/>,
      },
      {
        path: "/successfulpayment",
        element: <SuccessfulPayment/>
      },
      {
        path: "/reserva",
        element: <Reserva/>
      }
    ]
  }
])