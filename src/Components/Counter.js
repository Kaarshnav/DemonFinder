import React from "react";
import { useState } from "react";
function Counter() {
  let [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter++);
  };
  const dec = () => {
    setCounter(counter--);
  };
  return (
    <div>
      <div>
        <h>Counter val : {counter}</h>
      </div>

      <button style={{ margin: 20 }} onClick={inc}>
        {" "}
        Increment{" "}
      </button>
      <button onClick={dec}> Deccrement </button>
    </div>
  );
}

export default Counter;
