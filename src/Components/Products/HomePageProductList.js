import AppleWatch from "../Img/compiuter-6.jpg";
import classes from "./HomePageProductList.module.css";
import ProductDescription from "./ProductDescription";
import axios from "axios"
import { useState, useEffect } from "react"

function HomePageProductList() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios.get('data.json')
      .then(res => setInfo(res.data))

  }, [])


  return (
    <>
      <div className={classes.ProductListflex}>
        {info.filter((item) => item.id === 4 || item.id === 12 || item.id === 22 || item.id === 9 || item.id === 10 || item.id === 12 || item.id === 24 || item.id === 2 || item.id === 17).map((product) => (
          <ProductDescription
            category={product.category}
            description={product.description}
            name={product.name}
            id={product.id}
            key={product.id}
            price={product.price}
            photoes={product.img}
          />
        ))}
      </div>
      < button className={classes.button} >
        <span className={classes.viewMore}>View More</span>
      </button>
    </>
  );
}

export default HomePageProductList;
