import React, { Component } from "react";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import "./style/index.css";

export default class NewsPortal extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
        };
    }

    componentDidMount() {
        const fetchData = fetch("https://jsonplaceholder.typicode.com/users");

        fetchData
            .then(response => response.json())
            .then(data =>
                this.setState({ users: data }, () => console.log(data))
            )
            .catch(error => console.error(error));
    }

    getSearch = query => {
        console.log("update " + query);
        // this.setState({ users: null });
        console.log("state" + this.state);
        if (query.length > 0) {
            const fetchData = fetch(
                `https://jsonplaceholder.typicode.com/users?name=${query}`
            );

            fetchData
                .then(response => response.json())
                .then(data =>
                    this.setState({ users: data }, () => console.log(data))
                )
                .catch(error => console.error(error));
        } else {
            this.componentDidMount();
        }
    };

    // cardRender() {
    //     console.log(this.state);
    //     if (this.state) {
    //         return this.state.articles.map((data, index) => {
    //             return (
    //                 <Card
    //                     key={index}
    //                     title={data.title}
    //                     description={data.description}
    //                     thumbnail={data.urlToImage}
    //                     url={data.url}
    //                     date={data.publishedAt}
    //                 />
    //             );
    //         });
    //     }
    // }

    cardRender() {
        console.log("update");
        if (this.state) {
            const cards = [];
            const data = this.state.users;
            for (const key in data) {
                // console.log(this.state);
                cards.push(
                    <Card
                        key={key}
                        name={data[key].name}
                        email={data[key].email}
                        address={`${data[key].address.street}, ${data[key].address.suite}, ${data[key].address.city}, ${data[key].address.zipcode}`}
                    />
                );
            }
            return cards;
        }
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1 className="header">User List</h1>
                <SearchBar handleSearch={this.getSearch} />
                <main>{this.cardRender()}</main>
            </div>
        );
    }
}
