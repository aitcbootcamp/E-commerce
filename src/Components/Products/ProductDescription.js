import classes from "./productDescription.module.css";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";
const ProductDescription = (props) => {
  const info = () => {
    const obj = {
      name: props.name,
      price: props.price,
      id: props.id,
      description: props.description,
      img: props.img,
    };

    console.log(obj);
  };
  return (
    <Link to={`/product/${props.id}`}>
      <div
        className={classes.MainDiv}
        description={props.description}
        key={props.id}>
        <div className={classes.MainDivInfo}>
          <img onClick={info} src={props.img} className={classes.AppleWatch} />
          <div className={classes.infoOfItme}>
            <p>{props.name}</p>
            <h1>{props.price}$</h1>
            {/* <button onClick={info} className={classes.button}>
            Add to Cart
          </button> */}
            <AddToCartButton
              count={1}
              name={props.name}
              description={props.description}
              img={props.img}
              id={props.id}
              price={props.price}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductDescription;
