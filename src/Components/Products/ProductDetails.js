import React from "react";
import { useParams } from "react-router-dom";
import useData from "../../useData";
import ProductDescription from "./ProductDescription";
import InnerPageDescription from "./innerPageDescription";


const ProductDetails = () => {
    let params = useParams()
    let id = params.id
    let { productById } = useData({ id })
    console.log("kk", productById);
    if (!productById) return (null)
    return (
        <div>

            <InnerPageDescription
                category={productById.category}
                description={productById.description}
                name={productById.name}
                id={productById.id}
                key={productById.id}
                price={productById.price}
                img={productById.img}
            />


        </div>)

}


export default ProductDetails