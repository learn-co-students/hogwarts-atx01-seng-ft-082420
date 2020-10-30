import React, { Component } from "react";
import HogCard from './HogCard'

export default class HogContainer extends Component {

  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => (
         <HogCard hog={hog} key={hog.id} id={hog.id}
        />))}
      </div>
    );
  }
}
