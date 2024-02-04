import "./LandingPage.css"

export const LandingPage = () => {
  return (
    <section id="landing-page">
      {/* <h1 id="landing-page-title-1">Parapente</h1>
      <h1 id="landing-page-title-2">Canary</h1> */}
      {/* <img id="landing-image" src="https://i.postimg.cc/wjVDMs7m/Portada-Teide-1.png" alt="background image parapente teide" /> */}
      <div id="landing-image" style={{position: "relative", width: "100%", height: "0", paddingTop: "56.2500%",
      paddingBottom: "0", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden",
      borderRadius: "8px", willChange: "transform"}}>
        <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0", margin: "0"}}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF7pvOPD_A&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe>
      </div>
    </section>
  )
}