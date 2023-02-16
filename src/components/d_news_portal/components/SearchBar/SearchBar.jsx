import React, { Component } from "react";
import "./style/searchbar.css";

export default class SearchBar extends Component {
    sendSearch = event => {
        event.preventDefault();
        console.log("search: " + event.target.searchbar.value);
        this.props.handleSearch(event.target.searchbar.value);
    };

    render() {
        return (
            <form className="search-bar-container" onSubmit={this.sendSearch}>
                <input
                    className="search-bar"
                    type="text"
                    name="searchbar"
                    placeholder="Search by full name (case sensitive)"
                />
                <button className="search-bar-submit" type="submit">
                    Search
                </button>
            </form>
        );
    }
}
