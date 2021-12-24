import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import Form from "./Form";
import { useState } from "react";
import ProductList from "../Products/ProductList";
const Cart = () => {
  const [buttonClick, setButtonClick] = useState(false);

  const checkoutClick = (e) => {
    e.preventDefault();
    setButtonClick(true);
    console.log("k");
  };
  return (
    <>
      <div className={classes.title}>Cart Content:</div>
      <div className={classes.cart}>
        <ProductList />

        <Checkout checkoutClick={checkoutClick}></Checkout>
      </div>
      {buttonClick && <Form setButtonClick={setButtonClick}></Form>}
    </>
  );
};

export default Cart;
