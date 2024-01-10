import { Component } from "react";

class Counter extends Component {
  state = {
    counter: 1,
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { counter } = this.state;
    console.log("Re-Render:", counter);

    return (
      <div>
        <h1>Counter: {counter}</h1>
        <div>
          <button onClick={this.onIncrement}>Increment</button>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter - 1 });
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default counter1;