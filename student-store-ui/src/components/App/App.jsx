import * as React from "react"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./App.css"
import Hero from "../Hero/Hero"
import SubNavbar from "../subnavbar/subnav"
import Home from "../Home/Home"
import { useState, useEffect } from 'react';
import ProductDetail from "../ProductDetail/ProductDetail"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"


export default function App() {

  const [searchText, setSearchText] = useState('');

  const [activeButton, setActiveButton] = useState('All Categories');

  const [shoppingCart, setShoppingCart] = useState([]);

  const [totPrice, setTotPrice] = useState(0);

  // const [tempCart, setTempCart] = useState([]);


  // let subTot = 0;


  // console.log(shoppingCart)


  // {shoppingCart.map((product) => (

    

    // setTotPrice(newTot)
    // console.log(product.productPrice)

  // ))}


  // console.log(subTot)


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {}


          <Navbar/>
          <Hero />
          <Sidebar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}  />
          <SubNavbar searchText={searchText} setSearchText={setSearchText} activeButton={activeButton} setActiveButton={setActiveButton}/>
          {/* <Home searchText={searchText} setSearchText={setSearchText} activeButton={activeButton} setActiveButton={setActiveButton}/> */}
          <Routes>
            
            <Route path="/" element={<Home searchText={searchText} setSearchText={setSearchText} activeButton={activeButton} setActiveButton={setActiveButton} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>}/>
            <Route path="/products/:productId" element = {<ProductDetail/>}/>


          </Routes>
          <About />
          <Contact />
          <Footer />


          


        </main>
      </BrowserRouter>
    </div>
  )
}
