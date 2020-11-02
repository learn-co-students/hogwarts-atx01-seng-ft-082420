import React, { Component } from "react";
import HogCard from "./HogCard";

class HogInfo extends Component {
  render() {
    return (
      <div>
        <h5>Weight: {this.props.weight}</h5>
        <h5>Speciality: {this.props.speciality}</h5>
        <h5>Medal: {this.props["highest medal aachieved"]}</h5>
        <h5>
            {this.props.greased
            ? "Greased"
            : "Not Greased"}
        </h5>
      </div>
    );
  }
}

export default HogInfo;
