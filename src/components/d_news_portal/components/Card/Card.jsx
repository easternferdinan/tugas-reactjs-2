import React, { Component } from "react";
import "./style/card.css";

export default class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <img
                    className="card-thumbnail"
                    src={this.props.thumbnail}
                    alt="Thumbnail"
                />
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <small className="card-info">{this.props.date}</small>
                    <p className="card-description">{this.props.description}</p>
                    <a className="card-link" href={this.props.url}>
                        Baca
                    </a>
                </div>
            </div>
        );
    }
}
