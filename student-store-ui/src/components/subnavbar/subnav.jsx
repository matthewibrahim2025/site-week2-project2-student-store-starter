import * as React from "react"
import "./subnav.css"
import { useState, useEffect } from 'react';




export default function SubNavbar({searchText, setSearchText, activeButton, setActiveButton}) {

  const [productList, setproductList] = useState([]);
  
  let filteredData = []

  // const [activeButton, setActiveButton] = useState('All Categories');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  

  return (
    <nav className="sub-navbar">

      <div className="content">

        <div className="row">
            <div className="search-bar">
                <input type="text" name="search" placeholder="Search" value={searchText} onChange={
                  (event) => {
                    setSearchText(event.target.value)
                    // console.log(event.target.value)
                  }
                } />
                    {/* {console.log(searchText)} */}
                    <i className="material-icons">search</i>
            </div>

            <div className="links">
                <span className="help">
                    <i className="material-icons">help</i>Help
                </span>
                    
                <div className="cart">
                    <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
                </div>
            </div>

        </div>



        <div className="row">

            <div className="hamburger-menu"><i className="material-icons">menu</i></div>
            <ul className="category-menu open">
            <li className={activeButton === 'All Categories' ? 'is-active' : ''}>
              <button onClick={() => handleClick('All Categories')}>All Categories</button>
            </li>
            <li className={activeButton === 'Clothing' ? 'is-active' : ''}>
              <button onClick={() => handleClick('Clothing')}>Clothing</button>
            </li>
            <li className={activeButton === 'Food' ? 'is-active' : ''}>
              <button onClick={() => handleClick('Food')}>Food</button>
            </li>
            <li className={activeButton === 'Accessories' ? 'is-active' : ''}>
              <button onClick={() => handleClick('Accessories')}>Accessories</button>
            </li>
            <li className={activeButton === 'Tech' ? 'is-active' : ''}>
              <button onClick={() => handleClick('Tech')}>Tech</button>
            </li>
            </ul>

        </div>

      </div>

    </nav>

  )
}
