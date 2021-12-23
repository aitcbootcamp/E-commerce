import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import Form from "./Form";
import { useState } from "react";
const Cart = () => {
  const [buttonClick, setButtonClick] = useState(false);

  const checkoutClick = (e) => {
    e.preventDefault();
    setButtonClick(true);
    console.log("k");
  };
  return (
    <>
      <div className={classes.cart}>
        <Checkout checkoutClick={checkoutClick}></Checkout>
        {buttonClick && <Form></Form>}
      </div>
    </>
  );
};

export default Cart;
