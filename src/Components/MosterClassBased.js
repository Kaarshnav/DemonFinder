import React from "react";
import { useState } from "react";
import { Component } from "react";
class MonsterClassBased extends Component {
  constructor() {
    console.log(" constructor executed ");
    super();
    this.state = {
      allMonsters: [
        { name: "saini", id: 1 },
        { name: "yadav", id: 2 },
        { name: "Rai rndi", id: 3 },
      ],
    };
    console.log(" State initialized ");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        this.setState(() => {
          return { allMonsters: users };
        });
      })
      .catch();
  }

  render() {
    return (
      <div>
        {console.log(" render ui  ")}
        <div style={{ margin: 100 }}>
          {this.state.allMonsters.map((ele) => {
            return (
              <div key={ele.id} style={{ margin: 20 }}>
                {ele.name} {"=======>>>>>>"} {ele.username}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MonsterClassBased;
