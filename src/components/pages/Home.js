import React, { Component } from "react";
import Carasoul from "../ui/Carasoul";
import Item from "../ui/Item";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Carasoul />
        <div className="py-5 text-center display-4">Featured products</div>
        <div className="flex-contaner">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </React.Fragment>
    );
  }
}
