const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = require("stripe")(STRIPE_SECRET_KEY) //? requerimos stripe y añandimos clave secreta que nos da en el dashboard (la tenemos guardada en el .env por seguridad)
const express = require("express")
const cors = require("cors")

//! ------------- CREAMOS SERVIDOR y dar CORS-------------
const app = express()
app.use(cors({origin: "http://localhost:5173"}))

app.use(express.static("public"))
app.use(express.json())

//! ----------- CONECTAMOS A LA BASE DE DATOS (MONGO DB) --------------
const { conectarBd } = require("./src/utils/db")
conectarBd()

//! ----------- HACEMOS EL PAYMENT INTENT --------------

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

//! ----------- CREAMOS LA RUTA -----------



//! ----------- PONEMOS SERVIDOR A FUNCIONAR -------------
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("Servidor en el puerto", 3000)
})



