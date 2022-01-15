import classes from "./AddToCartButton.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../store/cartContext";

const AddToCartButton = (props) => {
  let { cart, setCart, items, localSt } = useContext(CartContext);
  // console.log(localSt);

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

    const addItem = (description) => {
      const filtered = cart.filter((item) => item.id === description.id);

      if (filtered.length < 1) {
        setCart((prevItems) => {
          return [...prevItems, description];
        });
        localSt = cart;
        console.log(cart);
        console.log(localSt);
      } else {
        const amounts = cart.map((item) =>
          item.id === description.id
            ? { ...item, count: (item.count += description.count) }
            : item
        );
        setCart(amounts);
        localStorage.setItem("items", JSON.stringify(amounts));
      }
    };
    addItem(description);
  };
  localStorage.setItem("items", JSON.stringify(cart));

  console.log(cart);
  return (
    <form>
      <button type="submit" className={classes.buttonAdd} onClick={add}>
        Add To Cart
      </button>
    </form>
  );
};
export default AddToCartButton;
