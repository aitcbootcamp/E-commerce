import classes from "../Slider/sliderstyle.module.css";
import { images } from "./Helpers/CouruselData";
import { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import sonyImg from "../Img/compiuter-6.jpg";
import hpLeptop from "../Img/compiuter-11.jpg";
import asusLeptop from "../Img/compiuter-25.jpg";
import hpPavilion from "../Img/HPPavilion.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Slider() {
  return (
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
      </AliceCarousel>
    </div>
  );
}

export default Slider;
