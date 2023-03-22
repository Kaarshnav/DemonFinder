import React from "react";
import { useState } from "react";
import { Component } from "react";
class MonsterClassBased extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "saini", id: 1 },
        { name: "yadav", id: 2 },
        { name: "Rai rndi", id: 3 },
      ],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => console.log(users))
      .catch();
  }

  render() {
    return (
      <div>
        <div style={{ margin: 100 }}>
          {this.state.monsters.map((ele) => {
            return (
              <div key={ele.id} style={{ margin: 20 }}>
                {ele.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MonsterClassBased;
