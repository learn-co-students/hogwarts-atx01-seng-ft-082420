import React, { Component } from "react";
import hogs from "../porkers_data";
import HogInfo from "./HogInfo";

class HogCard extends Component {
    
    
  render() {
      const hogName = this.props.hog.name.toLowerCase().replace(/\s+/g,"_")
    return (
      <div>
        <h3>{this.props.hog.name}</h3>
        <img src={require(`../hog-imgs/${hogName}.jpg`)}/>
        {this.props.hog.display ? 
        <HogInfo {...this.props.hog}/> : 
        null}
      </div>
    );
  }
}

export default HogCard;
