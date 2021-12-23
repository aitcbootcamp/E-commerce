import React, { useState } from "react";
// css
import classes from "./ProdactCount.module.css";
const ProdactCount = (props) => {
  const [count, setCount] = useState(1);
  const minusNumber = (e) => {
    e.preventDefault();
    if (count == 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  const pluss = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  console.log(count);

  return (
    <form>
      <button onClick={minusNumber} className={classes.minus}>
        -
      </button>
      <span className={classes.number}>{count}</span>
      <button onClick={pluss} className={classes.pluss}>
        +
      </button>
    </form>
  );
};

export default ProdactCount;
