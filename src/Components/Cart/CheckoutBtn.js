import classes from "./CheckoutBtn.module.css";

const CheckoutBtn = (props) => {
  return (
    <>
      <button onClick={props.checkoutClick} className={classes.button}>
        Checkout
      </button>
    </>
  );
};

export default CheckoutBtn;
