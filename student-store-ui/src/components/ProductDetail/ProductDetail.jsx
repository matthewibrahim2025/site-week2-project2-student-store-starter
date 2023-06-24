// import "../ProductDetail/.css"
import "./ProductDetail.css"
import React from "react";

import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const {productId} = useParams();

    // console.log({productId});

    const [productDetails, setproductDetails] = useState(null);
    const [itemDetails, setItemDetails] = useState(null);

    const fetchProduct = async () => {
      try {
        const res =  await axios.get(`http://localhost:3001/store/${productId}`)
        if (res?.data) {
          setItemDetails(res.data)
          // console.log(res.data.product)
        } else {
          console.error("Something went wrong.")
        }
      } catch (err) {
        console.log(err)
     }
    }

    fetchProduct();

    // const[product, setProduct] = useState(null);
    return (

      <div className="product-card">

      
        
        <div className="product-detail">
        {itemDetails ? ( 
          <div className="product-card">

            <h2>{itemDetails.name}</h2>
            {/* <h2>Product #{itemDetails.id}</h2> */}
            
            <div>


              
            </div>
            <img className="product-info" src={itemDetails.image} />
            <h2 className="product-info">{itemDetails.description}</h2>
            </div>) : (<h1> loading</h1>)}

          </div>


        </div>
  
    )
  }