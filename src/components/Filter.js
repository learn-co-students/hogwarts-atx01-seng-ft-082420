import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className='filterWrapper'>
        <button onClick={this.props.filterHogs} className='ui button'>
          Greased
        </button>
        <button onClick={this.props.sortByName} className='ui button'>
          Sort By Name
        </button>
        <button onClick={this.props.sortByWeight} className='ui button'>
          Sort By Weight
        </button>
        <button onClick={this.props.showAll} className='ui button'>
          Show All
        </button>
        {/* <div className='ui menu'>
          <div className='item'>
            <label>Sort by</label>
          </div>
          <div className='ui item'>
            <select className='ui selection dropdown' name='sort'>
              <option value='name'>Name</option>
              <option value='weigth'>Weight</option>
            </select>
          </div>
          <div className='item'>
            <input type='checkbox' className='ui toggle checkbox' />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Filter;
