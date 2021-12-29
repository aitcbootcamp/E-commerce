import classes from "./AddToCartButton.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../store/cartContext";

const AddToCartButton = (props) => {
  let { cart, setCart, items, localSt } = useContext(CartContext);
  // console.log(localSt);
  const addItem = (description) => {
    setCart((prevItems) => {
      return [...prevItems, description];
    });
    localSt = [...items, description];
    localStorage.setItem("items", JSON.stringify(cart));
  };
  const add = (e) => {
    e.preventDefault();
    console.log("?");
    const description = {
      name: props.name,
      price: props.price,
      category: props.category,
      description: props.description,
      id: props.id,
      img: props.img,
      count: props.count,
    };

    addItem(description);
  };
  return (
    <form>
      <button type="submit" className={classes.buttonAdd} onClick={add}>
        Add To Cart
      </button>
    </form>
  );
};
export default AddToCartButton;
