import CheckoutBtn from "./CheckoutBtn";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const items = JSON.parse(localStorage.getItem("items"));

  return (
    <>
      <div className={classes.checkout}>
        <p className={classes.title}>Cart Summary:</p>
        {items.map((item, index) => (
          <p key={item.id}>
            <span>{index + 1}. </span>
            {item.name}
            {item.amount > 1 && (
              <span className={classes.itemAmount}>{item.amount}X</span>
            )}
          </p>
        ))}
        <p className={classes.amount}>
          Total Amount:{" "}
          <span>
            {items.reduce(
              (previousValue, currentValue) =>
                parseInt(previousValue) + parseInt(currentValue.price),
              0
            )}
            ${" "}
          </span>
        </p>
        <CheckoutBtn checkoutClick={props.checkoutClick} />
      </div>
    </>
  );
};

export default Checkout;
