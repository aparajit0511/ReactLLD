import React, { Suspense, lazy } from "react";
import image1 from "./carouselImages/image1.jpg";
import image2 from "./carouselImages/image2.jpg";
import image3 from "./carouselImages/image3.jpg";
import image4 from "./carouselImages/image4.jpg";
import image5 from "./carouselImages/image5.jpg";

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function LazyLoading() {
  //   const carouselImages = [
  //     lazy(() => import("./carouselImages/image1.jpg")),
  //     lazy(() => import("./carouselImages/image2.jpg")),
  //     lazy(() => import(image3)),
  //   ];

  const carouselImages = [image1, image2, image3, image4, image5];
  return (
    <div>
      <h1>LazyLoading</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {carouselImages.map((result, index) => (
          <div key={index}>
            <LazyLoadImage width="100%" height="auto" src={result} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LazyLoading;
