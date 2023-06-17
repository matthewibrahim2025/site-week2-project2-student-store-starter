import * as React from "react"
import "./Navbar.css"
import TwitterLogo from "/../assets/twitterLogo.png"
import codePathLogo from "/../assets/codepathlogo.png"
import fbLogo from "/../assets/facebook.svg"
import instaLogo from "/../assets/IGlogo.png"

function Socials() {
  return (
    <div className="socials">

      <a href="/">
        <img width="18" height="18" src={TwitterLogo} alt="Twitter logo"/>
      </a>

      <a href="/">
        <img width="18" height="18" src={instaLogo} alt="Instagram logo"/>
      </a>

      <a href="/">
        <img width="18" height="18" src={fbLogo} alt="Facebook logo"/>
        {/* <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#ffffff",}} /> */}
      </a>

    </div>
  )
}

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img width="70px" src={codePathLogo} alt="codepath logo"/>
      </a>
    </div>
  )
}

function Links() {
  return (
    <ul className="links">
      <li><a href="/">Home</a></li>
      <li><a href="/#About">About Us</a></li>
      <li><a href="/#Contact">Contact Us</a></li>
      <li><a href="/#Buy">Buy Now</a></li>
    </ul>
  )
}




export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo className="logo"/>       
        <Socials className="socials"/>
        <Links className="links"/>
      </div>
    </nav>

  )
}
