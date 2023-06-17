import * as React from "react"
import "./Home.css"
import { useState, useEffect } from 'react';
import axios from "axios";
// import handleInputChange from '../subnavbar/subnav.jsx';
// import searchText from '../subnavbar/subnav.jsx';
import { Link } from 'react-router-dom';







function Buy({searchText, setSearchText, activeButton, setActiveButton}) {

  const [productList, setproductList] = useState([]);
  let filteredData = []

  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };
  

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setproductList(response.data.products);
        // console.log(response.data.products);

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
  if (activeButton != 'All Categories') {
    filteredData = productList.filter(item => item.category.includes(activeButton.toLowerCase()))
    filteredData = filteredData.filter(item => item.name.toLowerCase().includes(searchText))
  } else {
    filteredData = productList.filter(item => item.name.toLowerCase().includes(searchText))
  }
  
  
  
  return (    
    
    <div id="Buy" className="product-grid">


      {/* <div className="product-card"> */}

        <div className="content">
          <h3>Best Selling Products</h3>

          <div className="grid">

            {filteredData.map((product) => (
            <div key={product.id} className="product-card">
              
                <div className="media">



                    <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt="product cover"></img>
                    </Link>
                    

                </div>

                <div className="product-info">
                    <div className="main-info">
                        <p className="product-name">
                            {product.name}
                        </p>

                        <div className="stars">

                        </div>

                        <p className="product-price">${product.price}</p>
                    </div>

                    <div className="actions">
                        <div className="buttons">
                            <button className="add"><i className="material-icons">add</i></button>
                            <button className="remove"><i className="material-icons">remove</i></button>
                        </div>
                    </div>

                </div>
              
            </div>
            ))}

          </div>
        </div>       
      {/* </div> */}


    </div>
  )
}


export default function Home({searchText, setSearchText, activeButton, setActiveButton}) {
    
  return (
    <div className="home">
      {/* <p>Home</p> */}
      <Buy id="buy" className="product-grid" searchText={searchText} setSearchText={setSearchText} activeButton={activeButton} setActiveButton={setActiveButton}/>       
    </div>
  )
}

