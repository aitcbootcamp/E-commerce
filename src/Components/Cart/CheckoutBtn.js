import classes from "./CheckoutBtn.module.css";

const CheckoutBtn = () => {
  const checkoutClick = (e) => {
    e.preventDefault();

    console.log("k");
  };
  return (
    <>
      <button onClick={checkoutClick} className={classes.button}>
        Checkout
      </button>
    </>
  );
};

export default CheckoutBtn;
