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

const InnerPage1 = (props) => {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className={classes.SliderPageDiv}>
        <div className={classes.sliderImg}>
          <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
            <p>
              <img src={props.img} className={classes.pcImg} />
            </p>
          </AliceCarousel>
        </div>
        <div className={classes.discription}>
          <h2>{props.name}</h2>
          <p>Price :{props.price}</p>
          <p>Model :{props.name} </p>
          <p>Prodaction type : {props.category}</p>
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

export default InnerPage1;
