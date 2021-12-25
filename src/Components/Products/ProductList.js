import ProductDescription from "./ProductDescription";
import AppleWatch from "../Img/compiuter-6.jpg";
import classes from "./ProductList.module.css";
import axios from "axios"

function ProductList(props) {
  useEffect(() => {
    axios.get('data.json')
      .then(res => setInfo(res.data))

  }, [])

  return (
    <>
      <div className={classes.productArrangement}>
        {info.filter((item) => item.category === props.category).map((product) => (
          <ProductDescription
            category={product.category}
            description={product.description}
            name={product.name}
            id={product.id}
            price={product.price}
            photoes={product.photoes}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
