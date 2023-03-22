import React from "react";
import { useState } from "react";
function Monster() {
  let [demon, setDemon] = useState([
    { name: "saini", id: 1 },
    { name: "yadav", id: 2 },
    { name: "Rai rndi", id: 3 },
  ]);

  return (
    <div style={{ margin: 100 }}>
      {demon.map((ele) => {
        return (
          <div key={ele.id} style={{ margin: 20 }}>
            {ele.name}
          </div>
        );
      })}
    </div>
  );
}

export default Monster;
