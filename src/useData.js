import axios from "axios";
import { useEffect, useState } from "react";

const useData = ({ category = "", id = null }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://206.189.198.66/get_products").then((res) => {
      const respData = res.data.userData.map((info) => {
        return info.category_id === "68"
          ? { ...info, category: "laptop" }
          : info.category_id === "69"
          ? { ...info, category: "computer" }
          : info.category_id === "70"
          ? { ...info, category: "mobile" }
          : info.category_id === "71"
          ? { ...info, category: "accessories" }
          : info.category_id === "72"
          ? { ...info, category: "tablet" }
          : info;
      });
      setData(respData);
      console.log(res.data);
      console.log(respData);
    });
  }, []);
  // useEffect(() => {
  //   axios.get("http://206.189.198.66/get_products").then((res) => {
  //     // setData(res.data);
  //     console.log(res.data.userData);
  //   });
  // }, []);
  const filteredData = data.filter((item) => {
    return item.category === category;
  });

  const productById = data.find((item) => {
    if (item.id === id) {
      return true;
    }
    return false;
  });

  return { data, filteredData, productById };
};

export default useData;
