import classes from "./CartItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/cartContext";

const CartItem = (props) => {
  let { cart, setCart, items } = useContext(CartContext);

  const removeItem = (id) => {
    // e.preventDefault();
    setCart(cart.filter((item) => item.id !== id));
    console.log("id", id);
    console.log("cart", cart);
    localStorage.setItem(
      "items",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  };

  return (
    <>
      <div id={props.id} className={classes.wrapper}>
        <img src={props.img} />
        <p>{props.title}</p>
        <p>{props.count} x</p>
        <p>{props.price} </p>
        <button
          id={props.id}
          onClick={() => {
            removeItem(props.id);
          }}>
          Remove
        </button>
      </div>
    </>
  );
};

export default CartItem;
