import axios from "axios";
import { useEffect, useState } from "react";

<<<<<<< HEAD
const useData = (category, id) => {
    const [data, setData] = useState([]);
=======
const useData = (category) => {
  const [data, setData] = useState([]);
>>>>>>> ed49b007bda23d2fbab4c0172b955a7b691bbde0

  useEffect(() => {
    axios.get("http://localhost:3000/data.json").then((res) => {
      setData(res.data);
    });
  }, []);

  // console.log({ data, category })
  const filteredData = data.filter((item) => {
    return item.category === category;
  });
  //make sure to pass id as an argument
  // const producDetails = data
  //     .filter((item) => item.id === id)
  return { data, filteredData };
};

<<<<<<< HEAD
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
=======
export default useData;
>>>>>>> ed49b007bda23d2fbab4c0172b955a7b691bbde0
