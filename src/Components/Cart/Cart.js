import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import Form from "./Form";
import { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
const Cart = () => {
  let { cart, setCart, items, localSt } = useContext(CartContext);
  const [buttonClick, setButtonClick] = useState(false);
  // const cartItems = JSON.parse(localStorage.getItem("items"));
  console.log(cart);
  const checkoutClick = (e) => {
    e.preventDefault();
    setButtonClick(true);
  };
  return (
    <>
      {cart.length > 0 ? (
        <div className={classes.cart}>
          <div className={classes.items}>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                description={product.description}
                price={product.price}
                count={product.count}
                title={product.name}
                img={product.img}
                id={product.id}
              />
            ))}
          </div>
          <div>
            <Checkout checkoutClick={checkoutClick}></Checkout>
          </div>
        </div>
      ) : (
        <div className={classes.empty}>
          <p className={classes.emptyText}>Cart is empty</p>
          <Link to="/">
            {" "}
            <p className={classes.emptyLink}>Start Shopping</p>{" "}
          </Link>
        </div>
      )}

      {buttonClick && <Form setButtonClick={setButtonClick}></Form>}
    </>
  );
};

export default Cart;
