import React, { Component } from "react";
import HogCard from "./HogCard";

class HogList extends Component {
  render() {
    return (
      <div onClick={() => this.props.displayHog(this.props.hog)}>
        {this.props.hogs.map(hog => 
        <HogCard hog={hog} />)}
        
      </div>
    );
  }
}

export default HogList;
