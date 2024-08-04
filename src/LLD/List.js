import React, { useEffect, useState } from "react";

function List() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function FetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      ).then((res) => res.json());

      setData(response);
    }
    FetchData();
  }, []);

  //   console.log("data", data);
  //   data && data.map((item) => console.log(item.title));
  return (
    <div>
      <h1>List</h1>
      {data &&
        data.map((item, index) => (
          <ul key={index}>
            <li>{item.title}</li>
          </ul>
        ))}
    </div>
  );
}

export default List;
