import React from "react"
import Button from "../button/button.js"
export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };

        this.plusOne = this.plusOne.bind(this);
    }

    plusOne() {
        this.setState((previous) => ({ count: previous.count + 1 }));
    }

    render() {
        return (
            <Button onClick={this.plusOne}>
                {this.state.count}
            </Button>
        );
    }
}