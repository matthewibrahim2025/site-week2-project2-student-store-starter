import * as React from "react"
import "./Hero.css"
import house from "/../assets/house.svg"


function Media() {
    return (
      <div className="intro">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
          <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
      </div>
    )
  }

function Intro() {
  return (
    <div className="media">
        <img src={house} alt="hero" className="hero-img"/>
    </div>
  )
}


export default function Hero() {
  return (
    <div className="hero">

      <div className="content">
        <Media className="media"/>
        <Intro className="intro"/>    

      </div>

    </div>
  )
}
