import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    return (
      <div>Counter: {this.props.counter}</div>
    )
  }
}

export default Counter