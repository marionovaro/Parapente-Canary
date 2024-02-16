import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import { Compra, MainPage, SuccessfulPayment } from "../pages";


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
        children: [
          {
            path: "/compra/successfulpayment",
            element: <SuccessfulPayment/>
          }
        ]
      }
    ]
  }
])