import React, { Component } from "react";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import "./style/index.css";

export default class NewsPortal extends Component {
    constructor() {
        super();
        this.state = false;
    }

    componentDidMount() {
        const fetchData = fetch(
            "https://newsapi.org/v2/top-headlines?country=id&apiKey=a63cac178c6b4ee094b6d5988a9f0e51"
        );

        fetchData
            .then((response) => response.json())
            .then((data) => this.setState(data))
            .catch((error) => console.error(error));
    }

    getSearch = (query) => {
        console.log("update " + query);
        if (query.length > 0) {
            const fetchData = fetch(
                `https://newsapi.org/v2/everything?q=${query}&from=2023-01-31&sortBy=popularity&apiKey=a63cac178c6b4ee094b6d5988a9f0e51`
            );

            fetchData
                .then((response) => response.json())
                .then((data) => this.setState(data))
                .catch((error) => console.error(error));
        } else {
            this.componentDidMount();
        }
    };

    cardRender() {
        console.log(this.state);
        if (this.state) {
            return this.state.articles.map((data, index) => {
                return (
                    <Card
                        key={index}
                        title={data.title}
                        description={data.description}
                        thumbnail={data.urlToImage}
                        url={data.url}
                        date={data.publishedAt}
                    />
                );
            });
        }
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1 className="header">News Portal</h1>
                <SearchBar handleSearch={this.getSearch} />
                <main>{this.cardRender()}</main>
            </div>
        );
    }
}
