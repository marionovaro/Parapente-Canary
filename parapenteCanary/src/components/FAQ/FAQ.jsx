import "./FAQ.css"

export const FAQ = () => {

  return (
    <section id="faq-section">
      <h1 id="faq-section-title">Preguntas frecuentes</h1>
      <figure id="faq-wrapper">
        <details className="details-box">
          <summary className="summary-question">Pregunta 1</summary>
          Respuesta 1
        </details>
        <details className="details-box">
          <summary className="summary-question">Pregunta 2</summary>
          Respuesta 2
        </details>
        <details className="details-box">
          <summary className="summary-question">Pregunta 3</summary>
          Respuesta 3
        </details>
        <details className="details-box">
          <summary className="summary-question">Pregunta 4</summary>
          Respuesta 4
        </details>
      </figure>
    </section>
  )
}