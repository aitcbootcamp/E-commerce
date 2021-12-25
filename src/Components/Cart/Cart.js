import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import Form from "./Form";
import { useState } from "react";
import CartItem from "./CartItem";
import Header from "../Header";
import Footer from "../Footer";

const Cart = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const cartItems = JSON.parse(localStorage.getItem("items"));
  console.log(cartItems);
  const checkoutClick = (e) => {
    e.preventDefault();
    setButtonClick(true);
    console.log("k");
  };
  return (
    <>
      {/* <Header /> */}
      {/* <div className={classes.title}>Cart Content:</div> */}
      <div className={classes.cart}>
        <div className={classes.items}>
          {cartItems.map((product) => (
            <CartItem
              description={product.description}
              price={product.price}
              amount={product.numCount}
              title={product.name}
              img="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
          ))}
        </div>
        <div>
          <Checkout checkoutClick={checkoutClick}></Checkout>
        </div>
      </div>

      {buttonClick && <Form setButtonClick={setButtonClick}></Form>}
      <Footer />
    </>
  );
};

export default Cart;
