import * as React from "react"
import "./Sidebar.css"
import { useState } from 'react';


function ToogleButton({isActive, handleClick}) 
    
  {

  return (
    <div className="socials">

      <button className={`toggle-button button ${isActive ? "open" : "closed"}`} onClick={handleClick}>
        <i className="material-icons md-48">arrow_forward</i>
      
      </button>

    </div>
  )
}

function AddCartIcons() {
  return (
    <div className="cart-icons">

      <span className="cart-icon icon button">
        <i className="material-icons md-48">add_shopping_cart</i>
      </span>

      <span className="cart-icon icon button">
        <i className="material-icons md-48">monetization_on</i>
      </span>

      <span className="cart-icon icon button">
        <i className="material-icons md-48">fact_check</i>
      </span>

    </div>
  )
}


export default function Sidebar() {

  const [isActive, setIsActive] = useState(false);


  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <section className={`sidebar ${isActive ? "open" : "closed"}`}>

      <div className="wrapper">
          <ToogleButton isActive={isActive} handleClick={handleClick}/>

          <div className="shopping-cart">
            <AddCartIcons />
          </div>

      </div>



    </section>
  )
}
