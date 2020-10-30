import React, { Component } from "react";
import HogCardBack from './HogCardBack'

export default class HogCard extends Component {
    constructor() {
        super()

        this.state = {
            clicked: false
        }
    }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    let pigImage = require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)
    return (
      <div className="ui eight wide column" onClick={this.changeView}>
        <div className="pigTile">
            <h3>{this.props.hog.name} </h3>
            <img className="pigImage" src={pigImage} alt={this.props.hog.name} />
        <div className="pigInfo">
            {this.state.clicked ? <HogCardBack hog={this.props.hog}/> : null}
        </div>
            <button onClick={this.handleClick}>{this.state.clicked ? "Hide Details" : "See Details"}</button>
        </div>
      </div>
    );
  }
}
