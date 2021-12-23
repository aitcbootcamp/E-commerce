import CheckoutBtn from "./CheckoutBtn";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const items = [
    { name: "iPhone 8", price: 200, id: 1, amount: 1 },
    { name: "Marshal Headphones", price: 80, id: 2, amount: 1 },
    { name: "type-c Charger", price: 20, id: 3, amount: 3 },
    { name: "Samsung TV", price: 500, id: 4, amount: 1 },
  ];

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
                previousValue + currentValue.price,
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
