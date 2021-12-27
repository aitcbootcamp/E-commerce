import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
      <div id={props.id} className={classes.wrapper}>
        <img src={props.img} />
        <p>{props.title}</p>
        <p>{props.amount} x</p>
        <p>{props.price}</p>
        <button>Remove</button>
      </div>
    </>
  );
};

export default CartItem;
