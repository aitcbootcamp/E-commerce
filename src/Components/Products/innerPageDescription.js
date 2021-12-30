import classes from "./innerPage.module.css";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import AliceCarousel from "react-alice-carousel";
import ProdactCount from "../ProdactCount";

const InnerPageDescription = (props) => {
    const [count, setCount] = useState(1)

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
                1500s.
            </p>
        </>

    );
}
export default InnerPageDescription