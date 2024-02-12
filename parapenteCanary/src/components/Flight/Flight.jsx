import "./Flight.css"

export const Flight = () => {
  return (
    <section id="flight-info-section">
      <img id="tenerife-flight-section" src="https://res.cloudinary.com/dx2arqne6/image/upload/v1707075675/Teide_from_Space_no_Back_d9cucv.png" alt="Teide From Space" />
      <div id="flight-info-div">
        <div id="flight-title">
          <h1>Tenerife</h1>
          <h2>La isla de la eterna primavera</h2>
        </div>
        <p className="flight-paragraph first-paragraph">
          Te espera un viaje hacia tu interior, tus ganas de descubrir nuevos mundos, tu emoción de cerrar los ojos y dejarte atrapar por los sonidos, tus nervios al ascender junto al Teide y sentir toda la isla a tus pies bajo un mar de nubes.
        </p>
        <h3>«Vuelo en parapente con mayor desnivel de Europa»</h3>
        <p className="flight-paragraph second-paragraph">
          Más de <span id="span-desnivel">2250 metros de desnivel</span> desde el despegue en el Parque Nacional del Teide hasta aterrizar en la Playa de Martiánez en el Puerto de la Cruz. Atravesando densos bosques de pino canario, altos edificios de apartamentos, y acantilados que caen al Oceáno Atlántico.
        </p>
      </div>
    </section>
  )
}