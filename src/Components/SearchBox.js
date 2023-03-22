import React, { Component } from "react";

export class SearchBox extends Component {
  // from moster one : to sort data
  constructor() {
    console.log(" constructor executed ");
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
        console.log(users);
        this.setState(() => {
          return { allMonsters: users };
        });
      })
      .catch();
  }
  //

  render() {
    const dataFilter = () => {
      const filteredData = this.state.allMonsters.filter((user) => {
        return user.name.toLocaleLowerCase().includes(this.state.searchField);
      });
      console.log(filteredData, " --- filtered data --");
      return filteredData;
    };
    const onChangeHandler = (event) => {
      console.log("entered value", event.target.value);
      const searchField = event.target.value.toLocaleLowerCase();

      this.setState(() => {
        return { searchField }; // shorthand to update var with same name as key
      });
    };
    return (
      <div>
        <input
          className="seach-box"
          type={"search"}
          placeholder="Shaitaan Dhundoo "
          onChange={(event) => {
            onChangeHandler(event);
          }}
        />
        <div>SearchBox</div>
        <div style={{ margin: 100 }}>
          {dataFilter().map((ele) => {
            return (
              <div key={ele.id} style={{ margin: 20 }}>
                {ele.name} {"------ filtered ------ "} {ele.username}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchBox;
