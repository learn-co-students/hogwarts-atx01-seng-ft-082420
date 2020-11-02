import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';

import HogContainer from './HogContainer';
import Filter from './Filter';

class App extends Component {
  state = {
    allHogs: hogs
  };

  filterHogs = () => {
    console.log('Filtered');
    let gHogs = this.state.allHogs.filter(hog => hog.greased === true);
    this.setState({
      allHogs: gHogs
    });
  };

  sortByName = () => {
    console.log('by Name');
    let sortedHogs = this.state.allHogs.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.setState({ allHogs: sortedHogs });
  };
  sortByWeight = () => {
    console.log('by Weight');
    let sortedHogs = this.state.allHogs.sort((a, b) =>
      a.weight > b.weight ? 1 : -1
    );
    this.setState({ allHogs: sortedHogs });
  };

  showAll = () => {
    this.setState({
      allHogs: hogs
    });
  };
  render() {
    return (
      <div className='App ui grid container'>
        <Nav />
        <Filter
          filterHogs={this.filterHogs}
          showAll={this.showAll}
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}
        />
        <HogContainer hogs={this.state.allHogs} />
      </div>
    );
  }
}

export default App;
