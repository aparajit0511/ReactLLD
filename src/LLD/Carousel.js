import React, { useState } from "react";
import image1 from "./carouselImages/image1.jpg";
import image2 from "./carouselImages/image2.jpg";
import image3 from "./carouselImages/image3.jpg";
import image4 from "./carouselImages/image4.jpg";
import image5 from "./carouselImages/image5.jpg";

function Carousel() {
  const [currentCount, setcurrentCount] = useState(0);
  const carouselImage = [image1, image2, image3, image4, image5];

  const onPrevHandler = () => {
    setcurrentCount(
      currentCount === 0 ? carouselImage.length - 1 : currentCount - 1
    );
  };
  const onNextHandler = () => {
    setcurrentCount(
      currentCount === carouselImage.length - 1 ? 0 : currentCount + 1
    );
  };
  return (
    <div>
      <h1>Carousel</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <button
          style={{ width: "100px", height: "140px" }}
          onClick={onPrevHandler}
        >
          Prev
        </button>
        {carouselImage.map((item, index) => {
          return (
            <div key={index}>
              {currentCount === index && (
                <img
                  src={item}
                  alt=""
                  style={{ width: "1500px", height: "600px" }}
                />
              )}
            </div>
          );
        })}

        <button
          style={{ width: "100px", height: "140px" }}
          onClick={onNextHandler}
        >
          Next
        </button>
      </div>

      {/* <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      <img src={image5} alt="" /> */}
    </div>
  );
}

export default Carousel;
