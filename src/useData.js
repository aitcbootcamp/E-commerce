import axios from "axios";
import { useEffect, useState } from "react";

const useData = (category) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/data.json").then((res) => {
            setData(res.data);
        });

    }, []);

    console.log({ data, category })
    const filteredData = data
        .filter((item) => {
            return item.category === category
        })
    //make sure to pass id as an argument
    // const producDetails = data
    //     .filter((item) => item.id === id)
    return { data, filteredData }
}

export default useData;