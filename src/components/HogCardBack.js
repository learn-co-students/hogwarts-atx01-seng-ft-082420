import React, { Component } from "react";

export default class HogCard extends Component { 
  
  
  render() {
    return (
      <div className="ui eight wide column" >
        <div className="pigTile">
            <h3>{this.props.hog.name}</h3>
            <h4>{this.props.hog.greased ? "This Hog is Hella Greased" : "This Hog Could Use Some Grease.."}</h4>
            <h5>Specialty: {this.props.hog.specialty}</h5>
            <h5>Weight: {this.props.hog.weight}lbs</h5>
            <h3>Highest Medal Achieved: {this.props.hog['highest medal achieved'].toUpperCase()}</h3>
        </div>
      </div>
    );
  }
}