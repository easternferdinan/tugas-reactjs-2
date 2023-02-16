import React, { Component } from "react";
import "./style/card.css";

export default class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="card-body">
                    <h3 className="card-title">{this.props.name}</h3>
                    <small className="card-info">{this.props.email}</small>
                    <p className="card-description">{this.props.address}</p>
                </div>
            </div>
        );
    }
}
