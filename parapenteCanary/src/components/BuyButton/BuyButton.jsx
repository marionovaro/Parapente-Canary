import { useEffect } from "react"
import "./BuyButton.css"

export const BuyButton = () => {

  useEffect(() => {
    console.log(document.querySelector(".vuela-con-nosotros"))
  
    const observer = new IntersectionObserver(entries => {
      console.log(entries)
      //? las entries son el array de objetos que le hemos dicho que observe (observer.observe....), aunq solo haya 1, nos da un array
      entries.forEach(entry => { //? recorremos el array para poder acceder a cada elemento (en este caso solo hay uno)
        const buttonTarget = entry.target.querySelector(".vuela-con-nosotros")
        //? entry es el objeto (dentro del array de objetos) que hemos dicho que observe, mientras que entry.target es el elemento como tal, al cual podemos acceder y modificar y tal
        if (entry.isIntersecting) { //? isIntersecting es un boleano que nos dice si el objeto está en la viewport (es visible)
          buttonTarget.classList.add("main-button-animation") //? si es true (se ve), le añadimos la 2a clase del elemento, a la que le hemos dado las animaciones
        } else {
          buttonTarget.classList.remove('main-button-animation')
        }
      })
    })
    let button = document.querySelector("#main-button-wrapper")
    observer.observe(button)
  
  }, [])

  return (
    <nav id="main-button-wrapper">
      <button className="vuela-con-nosotros">
        VUELA CON NOSOTROS!
      </button>
    </nav>
  )
}