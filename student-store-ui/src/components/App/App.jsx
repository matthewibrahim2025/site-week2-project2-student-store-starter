import * as React from "react"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./App.css"
import Hero from "../Hero/Hero"
import SubNavbar from "../subnavbar/subnav"
import Home from "../Home/Home"
import { useState, useEffect } from 'react';
// import ProductDetail from "../ProductDetail/ProductDetail"
import ProductDetail from "../ProductDetail/ProductDetail"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"


export default function App() {

  const [searchText, setSearchText] = useState('');

  const [activeButton, setActiveButton] = useState('All Categories');

  


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {}


          <Navbar/>
          <Hero />
          <Sidebar />
          <SubNavbar searchText={searchText} setSearchText={setSearchText} activeButton={activeButton} setActiveButton={setActiveButton}/>
          {/* <Home searchText={searchText} setSearchText={setSearchText} activeButton={activeButton} setActiveButton={setActiveButton}/> */}
          <Routes>
            
            <Route path="/" element={<Home searchText={searchText} setSearchText={setSearchText} activeButton={activeButton} setActiveButton={setActiveButton}/>}/>
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
