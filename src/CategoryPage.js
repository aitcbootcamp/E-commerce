import React from "react";
import { useParams } from "react-router-dom";
import useData from "./useData";
import ProductDescription from "./Components/Products/ProductDescription";
import classes from "./category.module.css";
const Category = () => {
  const params = useParams();
  const category = params.category;
  const { data, filteredData } = useData({ category });

  console.log("filtdata", filteredData);

  return (
    <div className={classes.wrapper} style={{ width: "100%" }}>
      {filteredData.map((product) => (
        <ProductDescription
          category={product.category}
          description={product.description}
          name={product.title}
          id={product.id}
          key={product.id}
          price={product.price}
          img={product.img}
          count={product.count}
        />
      ))}
    </div>
  );
};

export default Category;
