import React, { Component } from 'react';
import CounterComponent from './CounterComponent';
import './Counter.css';


class Counter extends Component {

  constructor() {
    super();
    this.state = {
      counter : 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

  }

  render() {
    return (
      <div className="Counter">
        {/* Create Header component to have styles */}
          <h1>Welcome to React </h1>  
          <CounterComponent incrementMethod={this.increment} decrementMethod={this.decrement}></CounterComponent>
          <CounterComponent incrementBy={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterComponent>
          <CounterComponent incrementBy={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterComponent>
          <CounterComponent incrementBy={100} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterComponent>

          <span className="mainCount"> {this.state.counter}</span>
          <div><button id="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
  }

  increment(incrementBy) {
    this.setState(
      (prevState) => 
      {
        return {counter :prevState.counter + incrementBy}
      }
    );
  }

  decrement(decrementBy) {
    this.setState(
      (prevState) => 
      {
        return {counter :prevState.counter - decrementBy}
      }
    );
  }

  reset() {
    this.setState({
      counter : 0
    });
  }
}

export default Counter