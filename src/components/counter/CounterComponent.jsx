import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CounterComponent.css';

class CounterComponent extends Component {

  // constructor() {
  //   super();
  //   // this.state = {
  //   //   counter : 0
  //   // }

  //   // this.increment = this.increment.bind(this);
  //   // this.decrement = this.decrement.bind(this);
  // }
  render() {
    return (
      <div className="counterComponent">
        <button className="buttonClass" onClick={() => this.props.incrementMethod(this.props.incrementBy)}>+{this.props.incrementBy}</button>
        <button className="buttonClass" onClick={() => this.props.decrementMethod(this.props.incrementBy)}>-{this.props.incrementBy}</button>
        {/* <span className = "count">{this.state.counter}</span> */}
      </div>
    )
  }
//  increment() {
//    this.setState({
//      counter : this.state.counter + this.props.incrementBy
//    });

//    this.props.incrementMethod();
//  }

//  decrement() {
//   this.setState({
//     counter : this.state.counter - this.props.incrementBy
//   });

//   this.props.derementMethod();
// }
  
}

CounterComponent.defaultProps = {
  incrementBy : 1
}

CounterComponent.propTypes = {
  incrementBy : PropTypes.number
}
export default CounterComponent