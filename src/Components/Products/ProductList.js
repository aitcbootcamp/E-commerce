import ProductDescription from "./ProductDescription"
import AppleWatch from "./Img/AppleWatch7.jpeg"
import classes from "./ProductList.module.css"

function ProductList(props) {
    const info = [
        { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
        { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
        { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
        { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
        { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
        { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
        { description: "AppleWatch S7", price: 500, photoes: AppleWatch },
    ]

    return (
        <>
            <div className={classes.productArrangement}>
                {info.map(product => (
                    <ProductDescription
                        description={product.description}
                        price={product.price}
                        photoes={product.photoes}

                    />)
                )}
            </div>

        </>
    )
}

export default ProductList