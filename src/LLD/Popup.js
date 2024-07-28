import React, { useState } from "react";

function Popup() {
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
      <h1>Popup</h1>
      {!Modal && (
        <button
          style={{ width: "100px", height: "50px" }}
          onClick={onClickHandler}
        >
          Open Popup
        </button>
      )}
      {Modal && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            height: "200px",
            backgroundColor: "#FFB6C1",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "auto",
          }}
        >
          Popup Component
          <button
            onClick={onClickHandler}
            style={{ width: "100px", height: "50px" }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Popup;
