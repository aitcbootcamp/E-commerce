import classes from './AddToCartButton.module.css'
const AddToCartButton = (props) => {

  return (
    <form>
      <button type="submit" onClick={props.add} className={classes.buttonAdd}> Add To Cart</button>
    </form>
   
  );
};
export default AddToCartButton; 
