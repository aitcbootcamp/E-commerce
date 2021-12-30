import axios from "axios";
import { useEffect, useState } from "react";

const useData = ({ category = "", id = null }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/data.json").then((res) => {
      setData(res.data);
    });
  }, []);

  const filteredData = data.filter((item) => {
    return item.category === category;
  });

  const productById = data.find((item) => {
    if (item.id == id) {
      return true;
    }
    return false;
  })

  return { data, filteredData, productById };
};

export default useData;
