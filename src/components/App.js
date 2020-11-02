import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super()
    let newHogs = hogs.map(hog => {return({ ...hog, display: false})})
    this.state = {
      hogs: newHogs,
      displayHogs: newHogs
    }
  }

  displayHog = (hog) => {
    let changeHogs = this.state.displayHogs.map(hogObj => {
      if(hogObj === hog){
        return({ ...hog, display: !hog.display}) //toggle true and false
      }
      return hog 
    })

    this.setState({
      displayHogs: changeHogs,
      hogs: changeHogs
    })
  }

  filterHogs = () => {
    let greasedHogs = this.state.hogs.filter(hog => hog.greased === true)

    this.setState({
      displayHogs: greasedHogs
    })
  }

  showAllHogs = () => {
    this.setState({
      displayHogs: this.state.hogs
    })
  }

  sortByName = () => {
    let sortedHogs = this.state.displayHogs.sort((a,b) => a.name > b.name ? 1 : -1)
    this.setState({
      displayHogs: sortedHogs
    })
  }

  sortByWeight = () => {
    let sortedHogs = this.state.displayHogs.sort((a,b) => a.weight > b.weight ? 1 : -1)
    this.setState({
      displayHogs: sortedHogs
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter filterHogs={this.filterHogs} showAllHogs={this.showAllHogs}
        sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
        <HogList hogs={this.state.displayHogs} displayHog={this.displayHog}/>
      </div>
    );
  }
}

export default App;
