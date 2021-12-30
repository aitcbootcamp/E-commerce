import InnerPageDescription from './innerPageDescription'
import React from "react";
import { useParams } from "react-router-dom";
import useData from "../../useData";

const InnerPageDetails = (props) => {
    let params = useParams()
    let id = params.id
    let { productById } = useData({ id })
    console.log();

    return (
        <InnerPageDescription
            category={productById.category}
            description={productById.description}
            name={productById.name}
            id={productById.id}
            key={productById.id}
            price={productById.price}
            img={productById.img}
        />

    )
}
export default InnerPageDetails