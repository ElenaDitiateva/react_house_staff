import React, { Component } from "react";
import Item from "./Item";

export default class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Item item={el} key={el.id} onShowItem={this.props.onShowItem} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}
