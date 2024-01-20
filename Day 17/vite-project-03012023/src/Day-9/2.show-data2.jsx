import { useEffect, useState } from "react";

const ShowData = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    console.log("in Step 2, inside UseEffect and Calling API");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        console.log("Main data: ", data);

        console.log("Step 3: Got data form API");
        setData1(data);
      })
      .catch((err) => {
        console.log("Step 3: Got Error from API");
        console.log("Error : ", err);
        setData1([]);
      });
  }, []);
  console.log("1. Re-Render: ", data1);

  return (
    <div>
      <h1>API Data</h1>
    </div>
  );
};

export default ShowData;
