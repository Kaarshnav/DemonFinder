import React, { Component } from "react";
import Card from "./Card";
import "./search-box.styles.css";
import "./card-list.styles.css";
export class SearchBox extends Component {
  // from moster one : to sort data
  constructor() {
    // console.log(" constructor executed ");
    super();
    this.state = {
      allMonsters: [
        { name: "saini", id: 1 },
        { name: "yadav", id: 2 },
        { name: "Rai rndi", id: 3 },
      ],
      searchField: "",
    };
    console.log(" State initialized ");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        // console.log(users);
        this.setState(() => {
          return { allMonsters: users };
        });
      })
      .catch();
  }
  //
  onChangeHandler = (event) => {
    // console.log("entered value", event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }; // shorthand to update var with same name as key
    });
  };

  render() {
    const { allMonsters, searchField } = this.state;
    const { onChangeHandler } = this;
    // destructing so that we can replace this.state.allMonsters to allMonster i.e reducing variable size

    const dataFilter = () => {
      const filteredData = allMonsters.filter((user) => {
        return user.name.toLocaleLowerCase().includes(searchField);
      });
      //   console.log(filteredData, " --- filtered data --");
      return filteredData;
    };

    return (
      <div>
        <input
          className="search-box"
          type={"search"}
          placeholder="Shaitaan Dhundoo "
          onChange={onChangeHandler}
        />

        <div className="card-list">
          {dataFilter().map((ele) => {
            return (
              <Card monster={ele} />
              //   <div key={ele.id} style={{ margin: 20 }}>
              //     {ele.name} {"------ filtered ------ "} {ele.username}
              //   </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchBox;
