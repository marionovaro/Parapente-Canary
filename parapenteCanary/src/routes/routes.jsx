import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import { Compra } from "../pages/Compra/Compra copy";
import { CheckOutForm } from "../components/CheckOutForm/CheckOutForm copy";
// import { Compra, MainPage, SuccessfulPayment } from "../pages";
import { MainPage, SuccessfulPayment } from "../pages";


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