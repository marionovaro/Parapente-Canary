// const express = require("express")
// const Stripe = require("stripe")
// const cors = require("cors")

// const app = express()

// const stripe = new Stripe("sk_test_51OkONdKjqtTHurvUcIWYNJZN68uyB6C7BYOgjzYnyqphOXFgz9bqsNAkOENKJTELiRJSkB9dQbahIc3N8vSosUTg00vsbTfdg6")

// app.use(cors({origin: "http://localhost:5173"}))
// app.use(express.json())

// app.post("/api/checkout", async (req, res) => {

//   try {
//     const {id, amount} = req.body
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "eur",
//       description: "Vuelo en parapente desde el Parque Nacional del Teide hasta el Puerto de la Cruz",
//       payment_method: id,
//       confirm: true,
//       return_url: "http://localhost:5173/compra/successfulpayment"
//     });

//     app.get("/secret", async (req, res) => { //? aqui estamos intentando obtener la client_secret, que nos la pide el front por temas de seguridad, y es una clave del objeto que nos da el paymentIntent
//       res.json({client_secret: payment.client_secret})
//     })
//     console.log(payment)
//     console.log("success")
//     return res.status(200).json({message: "Successful Payment!"})

//   } catch (error) {
//     return res.status(500).json({message: error.raw.message})
//   }
// })

// app.listen(3000, () => {
//   console.log("Servidor en el puerto", 3000)
// })