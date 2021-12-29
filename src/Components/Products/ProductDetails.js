import React from "react";
import { useParams } from "react-router-dom";
import useData from "../../../useData";
import ProductDescription from "./ProductDescription";


const ProductDetails = () => {
    let params = useParams()
    let id = params.id
    let { data, filteredData } = useData(id)
    console.log("filtdataid", filteredData);

    return (
        <div>
            {filteredData
                .map((product) => (
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
    )
}


export default ProductDetails