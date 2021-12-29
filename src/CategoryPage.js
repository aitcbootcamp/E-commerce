import React from "react"
import { useParams } from "react-router-dom";
import useData from "./useData"
import ProductDescription from "./Components/Products/homePageProduct/ProductDescription";

const Category = () => {
    const params = useParams();
    const category = params.category;
    const { data, filteredData } = useData(category)
    console.log("filtdata", filteredData);


    return <div style={{ width: "100%", height: "100vh" }}>
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
}

export default Category;