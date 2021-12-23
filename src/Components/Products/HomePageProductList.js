import AppleWatch from "../Img/compiuter-6.jpg";
import classes from "./HomePageProductList.module.css";
import ProductDescription from "./ProductDescription";

function HomePageProductList() {
  const info = [
    { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
    { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
    { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
    { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
  ];

  return (
    <>
      <div className={classes.ProductListflex}>
        {info.map((product) => (
          <ProductDescription
            description={product.description}
            price={product.price}
            photoes={product.photoes}
          />
        ))}
      </div>
      <button className={classes.button}>
        <span className={classes.viewMore}>View More</span>
      </button>
    </>
  );
}

export default HomePageProductList;
