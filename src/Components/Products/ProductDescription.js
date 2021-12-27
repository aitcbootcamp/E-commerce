import classes from "./productDescription.module.css";
import { useState } from "react";
const ProductDescription = (props) => {
  const info = () => {
    const obj = {
      name: props.name,
      price: props.price,
      id: props.id,
      description: props.description,
    };

    console.log(obj);
  };
  return (
    <div
      className={classes.MainDiv}
      description={props.description}
      key={props.id}>
      <div className={classes.MainDivInfo}>
        <img
          onClick={info}
          src={props.photoes}
          className={classes.AppleWatch}
        />
        <div className={classes.infoOfItme}>
          <p>{props.name}</p>
          <h1>{props.price}</h1>
          <button onClick={info} className={classes.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDescription;
