import React, { useState } from "react";

function Accordian() {
  const [Accordian, setAccordian] = useState(false);

  const onClickHandler = () => {
    setAccordian(!Accordian);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Accordian</h1>
      <div
        style={{
          display: "flex",
          width: "300px",
          height: Accordian ? "200px" : "100px",
          backgroundColor: "#FFF0F5",
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <h3>Accordian</h3>
        <button
          onClick={onClickHandler}
          style={{ width: "60px", height: "40px" }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default Accordian;
