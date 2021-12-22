import classes from './AddToCartButton.module.css'
const AddToCartButton = () => {
  return (
    <div>
      <button className={classes.buttonAdd}> Add To Cart</button>
    </div>
  );
};

export default AddToCartButton;