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

const InnerPage = (props) => {
  const [count, setCount] = useState(1);

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
          <p>price:1500$</p>
          <p>Model : Hp</p>
          <p>Prodaction type : Leptop</p>
          <ProdactCount count={count} setCount={setCount} />
          <AddToCartButton
            count={count}
            name={props.name}
            price={props.price}
            category={props.category}
            description={props.description}
            id={props.id}
            key={props.id}
            img={props.img}
          />
        </div>
      </div>
      <p className={classes.lorem}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
    </>
  );
};

export default InnerPage;
