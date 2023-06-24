import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import axios from "axios";
import shoppingCartPost from "./shoppingCartPost";
import shoppingCartGet from "./shoppingCartGet";
// import { set } from "../../../../student-store-express-api/routes/app";

function ToogleButton({ isActive, handleClick }) {
  return (
    <div className="socials">
      <button
        className={`toggle-button button ${isActive ? "open" : "closed"}`}
        onClick={handleClick}
      >
        <i className="material-icons md-48">arrow_forward</i>
      </button>
    </div>
  );
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
  );
}

function Cart({ shoppingCart, setShoppingCart }) {

  let subTot = 0;


  {shoppingCart.map((product) => (

    
    subTot += (product.productCost )

  ))}

  return (
    <div className="CartTable">
      <div className="header">
        <div className="header-row">
          <span class="flex-2">Name</span>
          <span class="center">Quantity</span>
          <span class="center">Unit Price</span>
          <span class="center">Cost</span>
        </div>

        {shoppingCart.map((product) => (
          // <div className="product-row">
          //   <div> {product.productName}</div>
          // </div>
          <div class="product-row">
            {/* {console.log(product)} */}
            <span class="flex-2 cart-product-name">{product.productName}</span>
            <span class="center cart-product-quantity">
              {product.itemCount}
            </span>
            <span class="center cart-product-price">
              ${product.productPrice.toFixed(2)}
            </span>
            <span class="center cart-product-subtotal">
              ${product.productCost.toFixed(2)}
              {/* {setTotPrice(totPrice + product.productCost)} */}
            </span>
          </div>
        ))}
      </div>

      <div class="receipt">
        <div class="receipt-subtotal">
          <span class="label">Subtotal</span>
          <span></span>
          <span></span>
          <span class="center subtotal">${subTot.toFixed(2)}</span>
        </div>
        <div class="receipt-taxes">
          <span class="label">Taxes and Fees</span>
          <span></span>
          <span></span>
          <span class="center">${(subTot * 0.0875).toFixed(2)}</span>
        </div>
        <div class="receipt-total">
          <span class="label">Total</span>
          <span></span>
          <span></span>
          <span class="center total-price">
            ${(subTot * 1.0875).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

function CheckOut({
  shoppingCart,
  setShoppingCart,
  totPrice,
  setTotPrice,
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [receipt, setReceipt] = useState([]);
  // const [tempCart, setTempCart] = useState([]);

  const [checkedOut, setCheckedOut] = useState(false);

  let subTot = 0;


  {receipt.map((product) => (

    
    subTot += (product.productCost )

  ))}

const handleCheckedValue = async (value) => {
  setCheckedOut(value);
}





  const handleClick = async () => {
    if (email == "" || name == "") {
      alert("Please enter a valid email and name.");
      return;
    } else if (shoppingCart.length == 0) {
      alert("Please add items to your cart before checking out.");
      // await handleCheckedValue(false);
      return;
    } else {
      // setTempCart([...shoppingCart]);
      await shoppingCartPost(shoppingCart);
      // console.log("receipt", setReceipt);
      // await shoppingCartGet(setReceipt);
      // console.log(receipt);
      await shoppingCartGet(setReceipt)
      
      // console.log("ewcwc", receipt);

      await setShoppingCart([]);
      await handleCheckedValue(true);
      // console.log("checkedOut", receipt);
    }
  };

  // console.log("testCart", tempCart);

  return (
    <div className="open">
      <h3 class="">
        Shopping Cart
        <span class="button">
          <i class="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>

      <div class="notification">
        No items added to cart yet. Start shopping now!
      </div>

      {shoppingCart.length != 0 ? (
        <Cart
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          
          // receipt={receipt}
        />
      ) : (
        <div className="empty-cart"></div>
      )}

      <div className="checkout-form">
        <h3 class="">
          Payment Info{" "}
          <span class="button">
            <i class="material-icons md-48">monetization_on</i>
          </span>
        </h3>
        <div class="input-field">
          <label class="label">Name</label>
          <div class="control ">
            <input
              name="name"
              class="checkout-form-input"
              type="text"
              placeholder="Student Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="input-field">
          <label class="label">Email</label>
          <div class="control">
            <input
              name="email"
              class="checkout-form-input"
              type="email"
              placeholder="student@codepath.org"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input name="termsAndConditions" type="checkbox" />
              <span class="label">
                I agree to the{" "}
                <a href="#terms-and-conditions">terms and conditions</a>
              </span>
            </label>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button checkout-button" onClick={handleClick}>
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div class="checkout-success">
        <h3>
          Checkout Info{" "}
          <span class="icon button">
            <i class="material-icons md-48">fact_check</i>
          </span>
        </h3>
        {/* gotta use a ternary for the checkout button to show the recipt */}
        {/* <div class="content">
          <p>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        </div>
 */}
        {/* {console.log(checkedOut)} */}
        <div className="content">
          {checkedOut ? (
            <div class="card">
              <header class="card-head">
                <h4 class="card-title">Receipt</h4>
              </header>
              <section class="card-body">
                <p class="header">
                  Showing receipt for {name} available at
                  {email}:
                </p>
                <ul class="purchase">
                  {receipt.map((product) => (
                    <li>
                      {product.itemCount} total {product.productName} purchased
                      at a cost of ${product.productPrice.toFixed(2)} for a
                      total cost of $
                      {(product.productPrice * product.itemCount).toFixed(2)}.
                    </li>
                  ))}

                  <li>Before taxes, the subtotal was ${subTot.toFixed(2)}</li>
                  <li>
                    After taxes and fees were applied, the total comes out to $
                    {(subTot * 1.0875).toFixed(2)}
                  </li>
                </ul>
              </section>
              <footer class="card-foot">
                <button class="button is-success">Shop More</button>
                <button class="button">Exit</button>
              </footer>
            </div>
          ) : (
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          )}
        </div>
        {/* {setCheckedOut(false)} */}
        {/* {checkedOut
          ? setShoppingCart([
              {
                itemCount: 1,
                productCost: 2.99,
                productName: "Cinnamon Rolls",
                productPrice: 2.99,
              },
            ])
          : ""} */}
        {/* {setCheckedOut(false)} */}
      </div>
    </div>
  );
}

export default function Sidebar({ shoppingCart, setShoppingCart }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <section className={`sidebar ${isActive ? "open" : "closed"}`}>
      <div className="wrapper">
        <ToogleButton isActive={isActive} handleClick={handleClick} />

        <div className="shopping-cart">
          {isActive ? (
            <CheckOut
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ) : (
            <AddCartIcons />
          )}
        </div>
      </div>
    </section>
  );
}
