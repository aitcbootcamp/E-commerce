import classes from "../Slider/sliderstyle.css";
import { images } from "./Helpers/CouruselData";
import { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Slider() {
  //state for switching images
  const [curimg, setcurimg] = useState(0);

  return (
    <div className="courusel">
      <div
        className="couruselinner"
        style={{ backgroundImage: `url(${images[curimg].img})` }}>
        <div
          className="left"
          onClick={() => {
            curimg > 0 && setcurimg(curimg - 1);
          }}>
          <ArrowBackIosIcon />
        </div>
        <div className="center">
          <h1 className={classes.h1}> {images[curimg].title}</h1>
          <p> {images[curimg].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            curimg < images.length - 1 && setcurimg(curimg + 1);
          }}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
