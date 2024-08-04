import React, { useState } from "react";
import "./Table.css";

function Table2() {
  const [Filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const data = [
    { name: "Aparajit", age: "30", city: "Lucknow" },
    { name: "Kim", age: "25", city: "Seoul" },
    { name: "Monty", age: "35", city: "London" },
    { name: "Tina", age: "40", city: "Paris" },
  ];

  const requestBody = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(Filter.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Table2</h1>
      <input
        type="text"
        placeholder="Filter"
        value={Filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th onClick={() => requestBody("name")}>Name</th>
            <th onClick={() => requestBody("age")}>Age</th>
            <th onClick={() => requestBody("city")}>City</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
