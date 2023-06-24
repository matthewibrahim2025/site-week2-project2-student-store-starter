import * as React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import handleInputChange from '../subnavbar/subnav.jsx';
// import searchText from '../subnavbar/subnav.jsx';
import { Link } from "react-router-dom";
import { AddtoShoppingCart } from "../HandleShoppingCart";
import { RemoveFromShoppingCart } from "../HandleShoppingCart";

// TODO
// work on displaying the shoping cart effectively
// debug why when i decrement it does not show properly as it increments by one then click again to decrement
// duplicate the hostserver and mkae it into your own backend

function ProductCard({ product, shoppingCart, setShoppingCart }) {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div key={product.id} className="product-card">
      <div className="media">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt="product cover"></img>
        </Link>
      </div>

      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{product.name}</p>

          <div className="stars"></div>

          <p className="product-price">${product.price}</p>
        </div>

        <div className="actions">
          <div className="buttons">
            <button
              className="add"
              onClick={(event) => {
                AddtoShoppingCart(
                  event,
                  itemCount,
                  setItemCount,
                  shoppingCart,
                  setShoppingCart,
                  product
                );

              }}
            >
              <i className="material-icons">add</i>
            </button>

            <button
              className="remove"
              onClick={(event) => {
                RemoveFromShoppingCart(
                  event,
                  itemCount,
                  setItemCount,
                  shoppingCart,
                  setShoppingCart,
                  product
                );
                // console.log(shoppingCart[0].itemCount)
              }}
            >
              <i className="material-icons">remove</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buy({
  searchText,
  setSearchText,
  activeButton,
  setActiveButton,
  shoppingCart,
  setShoppingCart,
}) {
  const [productList, setproductList] = useState([]);
  let filteredData = [];

  useEffect(() => {
    axios
      .get("http://localhost:3001/store")
      .then((response) => {
        setproductList(response.data.products);
       })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(productList.products);
  if (activeButton != "All Categories") {
    filteredData = productList.filter((item) =>
      item.category.includes(activeButton.toLowerCase())
    );
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
  } else {
    filteredData = productList.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
  }

  return (
    <div id="Buy" className="product-grid">
      {/* <div className="product-card"> */}

      <div className="content">
        <h3>Best Selling Products</h3>

        <div className="grid">
          {filteredData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home({
  searchText,
  setSearchText,
  activeButton,
  setActiveButton,
  shoppingCart,
  setShoppingCart,
}) {
  return (
    <div className="home">
      {/* <p>Home</p> */}
      <Buy
        id="buy"
        className="product-grid"
        searchText={searchText}
        setSearchText={setSearchText}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
}
