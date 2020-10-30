import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

export default class App extends Component {
    constructor() {
      super()
      this.state = {
        hogs: hogs,
        sort: "alphabetically"
      }
    }
  
  componentDidMount() {
    this.setState({hogs})
  }

  handleFilter = (filtered) => {
    if (filtered) {
      this.setState({hogs: hogs.filter(hog => hog.greased === true) })
    } else {
      this.setState({hogs: hogs})
    }
  }

  handleSort = (selected) => {
    this.setState({sort: selected})
  }

  sortHogs = () => {
    let hogs = this.state.hogs
    if (this.state.sort === "alphabetically") {
      hogs = this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    } else {
      hogs = this.state.hogs.sort((a,b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0))
    } 
    return hogs
  }

  render() {
    return (
      <div className="App" >
        <Nav />
        <Filter handleFilter={this.handleFilter} handleSort={this.handleSort}/>
        <br></br>
        <HogContainer hogs={this.sortHogs()}/>
      </div>
    );
  }
}