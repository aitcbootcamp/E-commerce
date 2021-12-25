import classes from "./productDescription.module.css";

const ProductDescription = (props) => {
  return (
    <div className={classes.MainDiv}>
      <div className={classes.MainDivInfo}>
        <img src={props.photoes} className={classes.AppleWatch} />
        <div className={classes.infoOfItme}>
          <p>{props.name}</p>
          <h1>${props.price}</h1>
          <button className={classes.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDescription;
