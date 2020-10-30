import React, { Component } from "react";

export default class Filter extends Component { 
    constructor() {
        super()

        this.state = {
            clicked: false,
            sort: "Alphabetically"
        }
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
        this.props.handleFilter(this.state.clicked)
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({sort: e.target.value})
        this.props.handleSort(this.state.sort)
    }

    render() {
        return (
        <div className="filter">
            <button onClick={this.handleClick}>{this.state.clicked ? "Greased" : "Greased and Ungreased"}</button>
            <br></br>
            Sort: <select value={this.state.sort} onChange={this.handleChange}>
                <option value="alphabetically">Alphabetically</option>
                <option value="weight">By Weight</option>
            </select>
        </div>
        );
    }
}