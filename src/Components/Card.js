import React, { Component } from "react";
import "./card-list.styles.css";
export class Card extends Component {
  render() {
    const { monster } = this.props;
    const { name, email, id } = monster;
    return (
      <div className="card-container">
        <img
          alt={"monster Img"}
          src={`https://robohash.org/monsters/${id}?&size=180x180`}
          //library to provide dummy imahe based on text
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
