import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super();

    this.state = {
      ticks: 0
    }
  }

  incrementTicks = () => {
    let { ticks } = this.state;
    ticks++;
    this.setState({ ticks })
  }

  render() {
    return <button onClick={this.incrementTicks}>{this.state.ticks}</button>;
  }
}

export default Counter;
