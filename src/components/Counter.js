import React, { Component } from "react"; //rcc= react class component
import "./counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 0,
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
      random: Math.round(Math.random() * 100),
    });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={this.increment}
          className="counter"
          style={{ marginTop: this.state.random }}
        >
          +
        </button>
        <button onClick={this.decrement} className="counter">
          -
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
