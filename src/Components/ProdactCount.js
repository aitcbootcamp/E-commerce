
// css
import classes from "./ProdactCount.module.css";
const ProdactCount = (props) => {
  const minusNumber = (e) => {
    e.preventDefault();
    if (props.count == 1) {
      props.setCount(1);
    } else {
      props.setCount(props.count - 1);
    }
  };
  const pluss = (e) => {
    e.preventDefault();
    props.setCount(props.count + 1);
  };
  console.log(props.count);

  return (
    <form>
      <button onClick={minusNumber} className={classes.minus}>
        -
      </button>
      <span className={classes.number}>{props.count}</span>
      <button onClick={pluss} className={classes.pluss}>
        +
      </button>
    </form>
  );
};

export default ProdactCount;
