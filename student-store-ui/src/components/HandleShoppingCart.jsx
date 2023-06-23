import * as React from "react";
// import "./Home.css"
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import handleInputChange from '../subnavbar/subnav.jsx';
// import searchText from '../subnavbar/subnav.jsx';
// import { Link } from 'react-router-dom';

export const AddtoShoppingCart = (
  event,
  itemCount,
  setItemCount,
  shoppingCart,
  setShoppingCart,
  product
) => {
  
  
  const updatedproductCount = itemCount + 1;
  const productPrice = product.price;
  const productName = product.name;
  let productCost;
  productCost = product.price;
  let checkProductInCart = shoppingCart.filter(
    (product, index) => product.productName == productName
  );
  if (checkProductInCart.length !== 0) {
    checkProductInCart = checkProductInCart[0];
    checkProductInCart.itemCount += 1;
    checkProductInCart.productCost += productCost;
    let updatedShoppingCart = shoppingCart.slice();
    let productInCartIndex;
    shoppingCart.filter((product, index) =>
      product.name == productName ? (productInCartIndex = index) : ""
    );
    updatedShoppingCart[productInCartIndex] = checkProductInCart;
    setShoppingCart(updatedShoppingCart);
  } else {
    const itemObject = {
      itemCount: updatedproductCount,
      productName: productName,
      productPrice: productPrice,
      productCost: productCost,
    };
    let copyShoppingCart = shoppingCart.slice();
    copyShoppingCart.push(itemObject);
    setShoppingCart(copyShoppingCart);
  }
  setItemCount(itemCount + 1);
  return <div></div>;
};

export const RemoveFromShoppingCart = (
  event,
  itemCount,
  setItemCount,
  shoppingCart,
  setShoppingCart,
  product
) => {
  // console.log( "LLOOK AT THUS", itemCount)

  const productPrice = product.price;
  const productName = product.name;
  let productCost;
  if (itemCount > 0) {
    productCost = product.price * itemCount;
  } else {
    productCost = product.price;
  }
  const productCount = itemCount > 0 ? itemCount - 1 : 0;
  let checkProductInCart = shoppingCart.filter(
    (product, index) => product.productName == productName
  );
  const removeProductIfEmpty = (updatedShoppingCart, productInCartIndex) => {
    let currentProductInCart = updatedShoppingCart[productInCartIndex];
    const productCount = currentProductInCart.itemCount;
    if (productCount <= 0) {
      updatedShoppingCart = updatedShoppingCart.filter(
        (Product, index) => Product.itemCount !== productCount
      );
    }
    return updatedShoppingCart;
  };
  if (checkProductInCart.length !== 0) {
    // console.log('if conding in addtoshoppignCart was hit', true)

    // console.log( "LLOOK AT THUS", checkProductInCart)

    checkProductInCart = checkProductInCart[0];

    // console.log( "LLOOK AT THUS", checkProductInCart)

    checkProductInCart.itemCount -= 1;

    checkProductInCart.productCost -= product.price;
    let updatedShoppingCart = shoppingCart.slice();
    let productInCartIndex;
    shoppingCart.filter((product, index) =>
      product.name == productName ? (productInCartIndex = index) : ""
    );
    updatedShoppingCart[productInCartIndex] = checkProductInCart;
    updatedShoppingCart = removeProductIfEmpty(
      updatedShoppingCart,
      productInCartIndex
    );
    setShoppingCart(updatedShoppingCart);
  }
  setItemCount(itemCount > 0 ? itemCount - 1 : 0);
  return <div></div>;
};
// export default RemoveFromShoppingCart
// export default AddtoShoppingCart
