import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import sonyImg from "../Img/compiuter-6.jpg";
import hpLeptop from "../Img/compiuter-11.jpg";
import asusLeptop from "../Img/compiuter-25.jpg";
import hpPavilion from "../Img/HPPavilion.jpg";
import classes from "./innerPage.module.css";
// add To cart bottom import
import AddToCartButton from "./AddToCartButton";
// add to prodact count button - 1 +
import ProdactCount from "../ProdactCount";
import { useState } from "react";

const InnerPage = () => {

  const [count, setCount] = useState(1);
  let items = [];
  let localSt = JSON.parse(localStorage.getItem("items"));
  if (localSt) {
    items = localSt;
    console.log(localSt);
  }
  const [cart, setCart] = useState(items);


  console.log(description);
  const addItem = (description) => {
    setCart((prevItems) => {
      return [...prevItems, description];
    });
    localSt = [...items, description];
    localStorage.setItem("items", JSON.stringify(cart));
  };
  addItem(description);

  const add = (e) => {
    e.preventDefault();
    const description = {
      name: "HP Pavilion x360 Convertible",
      price: 1500,
      model: "hp",
      prodactiontype: "leptop",
      count: count,
    }



    return (
      <>
        <div className={classes.SliderPageDiv}>
          <div className={classes.sliderImg}>
            <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
              <p>
                <img src={sonyImg} alt="pc" className={classes.pcImg} />
              </p>
              <p>
                <img src={hpLeptop} alt="pc" className={classes.pcImg} />
              </p>
              <p>
                <img src={asusLeptop} alt="pc" className={classes.pcImg} />
              </p>
              <p>
                <img src={hpPavilion} alt="pc" className={classes.pcImg} />
              </p>
            </AliceCarousel>
          </div>
          <div className={classes.discription}>
            <h2>HP Pavilion x360 Convertible</h2>
            <p>price:{description.price}$</p>
            <p>Model : Hp</p>
            <p>Prodaction type : Leptop</p>
            <ProdactCount count={count} setCount={setCount} />
            <AddToCartButton add={add} />
          </div>
        </div>
        <p className={classes.lorem}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
      </>
    );
  }
};

export default InnerPage;
