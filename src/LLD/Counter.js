import React, { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);

  const onIncrementHandle = () => {
    setCounter(Counter + 1);
  };

  const onDecrementHandle = () => {
    setCounter(Counter - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>Display Counter : {Counter}</h2>
      <button onClick={onIncrementHandle}>Increment</button>
      <button onClick={onDecrementHandle}>Decrement</button>
    </div>
  );
}

export default Counter;
