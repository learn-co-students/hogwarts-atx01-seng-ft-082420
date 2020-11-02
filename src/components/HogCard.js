import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogDetails from './HogDetails';

class HogCard extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  getImage = hogName => {
    let formattedName = hogName
      .split(' ')
      .join('_')
      .toLowerCase();
    let pigImages = require(`../hog-imgs/${formattedName}.jpg`);
    return pigImages;
  };
  render() {
    const { hog } = this.props;

    return (
      <div className='ui eight wide column'>
        <div className='ui card'>
          <div className='image'>
            <img src={this.getImage(hog.name)} />
          </div>
          <div class='content'>
            <a class='header'>{hog.name}</a>
            <div class='description'>{hog.specialty}</div>
          </div>
          <div class='extra content'>
            <button onClick={this.handleClick} className='ui button'>
              Pig Details
            </button>

            <a>{this.state.clicked ? <HogDetails hog={hog} /> : null}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default HogCard;
