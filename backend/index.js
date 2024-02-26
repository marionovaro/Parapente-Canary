const stripe = require("stripe")("sk_test_51OkONdKjqtTHurvUcIWYNJZN68uyB6C7BYOgjzYnyqphOXFgz9bqsNAkOENKJTELiRJSkB9dQbahIc3N8vSosUTg00vsbTfdg6") //? requerimos stripe y añandimos clave secreta que nos da en el dashboard
const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.static("public"))
app.use(express.json())
app.use(cors({origin: "http://localhost:5173"}))

//! ----------- CONECTAMOS A LA BASE DE DATOS (MONGO DB) --------------
const { conectarBd } = require("./src/utils/db")
conectarBd()

const caluclateOrderAmount = (items) => { //? esto lo hacemos para que el precio esté en el backend y así no se pueda modificar
  return 15000 //? en centimos, por eso hay 2 ceros de más
}

app.post("/create-payment-intent", async (req, res) => { 
  const { items } = req.body; //? cogemos la info que nos manda el front y las pasamos como params para la función calculadora
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: caluclateOrderAmount(items),
    currency: "eur"
  });

  res.send({
    clientSecret: paymentIntent.client_secret, //? client_secret es una clave dentro del objeto que se crea en paymentIntent cuando hacemos un intento
  })
})

app.listen(3000, () => {
  console.log("Servidor en el puerto", 3000)
})



