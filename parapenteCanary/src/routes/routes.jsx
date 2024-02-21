import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import { CheckOutForm } from "../components/CheckOutForm/CheckOutForm copy";
import { MainPage, SuccessfulPayment, Compra } from "../pages";


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
      }
    ]
  }
])