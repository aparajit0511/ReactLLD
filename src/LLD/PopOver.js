import React, { useState } from "react";

function PopOver() {
  const [Modal, setModal] = useState(false);

  const onClickHandler = () => {
    setModal(!Modal);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",

        alignItems: "center",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h1>PopOver</h1>
      <button
        style={{ width: "200px", height: "50px" }}
        onClick={onClickHandler}
      >
        Open Popover
      </button>
      {Modal && (
        <div
          style={{ border: "2px solid red", width: "300px", height: "50px" }}
        >
          <text>This is a PopOver.</text>
        </div>
      )}
    </div>
  );
}

export default PopOver;
