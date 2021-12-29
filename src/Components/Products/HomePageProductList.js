import AppleWatch from "../Img/compiuter-6.jpg";
import classes from "./HomePageProductList.module.css";
import ProductDescription from "./ProductDescription";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useData from "../../useData";

function HomePageProductList(props) {
  const { data, filteredData } = useData(props.category);

  return (
    <>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.ProductListflex}>
        {filteredData.slice(0, 4).map((product) => (
          <ProductDescription
            category={product.category}
            description={product.description}
            name={product.name}
            id={product.id}
            key={product.id}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
      <button className={classes.button}>
        {/* <Link to=""> */} <span className={classes.viewMore}>View More</span>
        {/* </Link> */}
      </button>
    </>
  );
}

export default HomePageProductList;
