import ProductDescription from "./ProductDescription";
import AppleWatch from "../Img/compiuter-6.jpg";
import classes from "./ProductList.module.css";

function ProductList(props) {
  axios.get('data.json')

  return (
    <>
      <div className={classes.productArrangement}>
        {info.map((product) => (
          <ProductDescription
            category={ }
            description={product.description}
            name={ }
            price={product.price}
            photoes={product.photoes}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
