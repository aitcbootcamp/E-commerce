import axios from "axios";
import { useEffect, useState } from "react";

const useData = (category, id) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/data.json").then((res) => {
            setData(res.data);
        });

    }, []);

    //console.log({ data, category })
    const filteredData = data
        .filter((item) => {
            return item.category === category
        })
    console.log({ data, id });

    const filteredData = data
        .filter((item) => {
            return item.id === id
        })

}

export default useData;