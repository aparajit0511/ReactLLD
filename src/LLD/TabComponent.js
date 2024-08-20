import React, { useState } from "react";

function TabComponent() {
  const [showTab, setShowTab] = useState(false);
  const onClickTab1 = () => {
    console.log("Tab1 Clicked");
    setShowTab(!showTab);
  };

  const onClickTab2 = () => {
    console.log("Tab2 Clicked");
    setShowTab(!showTab);
  };
  return (
    <div>
      <h1>TabComponent</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h3 onClick={onClickTab1}>Tab1</h3>
          {showTab && (
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          )}
        </div>
        <div>
          <h3 onClick={onClickTab2}>Tab2</h3>
          {!showTab && (
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabComponent;
