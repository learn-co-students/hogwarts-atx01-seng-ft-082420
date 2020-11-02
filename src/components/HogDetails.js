import React, { Component } from 'react';

export class HogDetails extends Component {
  render() {
    const { hog } = this.props;
    // console.log(hog['highest medal achieved']);
    return (
      <div className='description'>
        {hog.greased ? 'Greased Hog' : 'Not Greased'}
        <br />
        {hog.weight}
        <br />
        {hog['highest medal achieved']}
      </div>
    );
  }
}

export default HogDetails;
