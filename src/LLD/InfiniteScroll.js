import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [count, setcount] = useState(50);
  var elements = [];

  useEffect(() => {
    const Scroll = () => {
      // innerheight + ScrollY (gives scroll position of y axis) > offsetHeight (The offsetHeight property returns the viewable height of an element (in pixels), including padding, border and scrollbar, but not the margin.)
      if (
        window.innerHeight + window.scrollY >
        window.document.body.offsetHeight - 30
      ) {
        setcount(count + 50);
      }
    };
    window.addEventListener("scroll", Scroll);
    // The addEventListener() method attaches an event handler to a document.

    // return () => {
    //   window.removeEventListener("scroll", Scroll);
    // };
  }, [count]);

  for (var i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }
  return (
    <div>
      <h1>InfiniteScroll</h1>
      {elements}
    </div>
  );
}

export default InfiniteScroll;
