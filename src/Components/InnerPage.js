import pcImg from "./Img/compiuter-6.jpg";
import hpLeptop from "./Img/compiuter-11.jpg";
import asusLeptop from "./Img/compiuter-25.jpg";
import classes from "./innerPage.module.css";

const InnerPage = () => {
  return (
    <>
      <div className={classes.InnerPageDiv}>
        <img src={pcImg} alt="comp" className={classes.pcImg}/>
        <div>
          <p>price:</p>
          <p className={classes.amountP}>amount:</p>
          <form>
            <input type="text" placeholder="amount" className={classes.inputAmount}></input><br />
            <button>Add To Cart</button>
          </form>
        </div>
      </div>
      <p>lorem</p>
    </>
  );
};

export default InnerPage;
