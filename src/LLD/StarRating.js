import React, { useState } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function StarRating() {
  const [actualRating, setActualRating] = useState(0);

  const onClickHandler = (rating) => {
    console.log("infinte");
    setActualRating(rating);
  };

  return (
    <div>
      <h1>StarRating</h1>
      {[...Array(5)].map((star, index) => {
        var rating = index + 1;
        return (
          <label key={rating}>
            <button
              onClick={() => {
                onClickHandler(rating);
              }}
              onMouseMove={() => {
                onClickHandler(rating);
              }}
              onMouseLeave={() => {
                setActualRating(0);
              }}
            >
              <StarOutlineIcon
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: actualRating >= rating ? "yellow" : "grey",
                }}
              />
            </button>
          </label>
        );
      })}
      <div>
        <h2>The rating is {actualRating}</h2>
      </div>
    </div>
  );
}

export default StarRating;
