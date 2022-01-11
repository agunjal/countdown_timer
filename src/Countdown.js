import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.number ?? 30
    };

    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        counter: this.state.counter - 1
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (0 > nextState.counter) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        {!this.state.counter ? <p>Time's up!</p> : ""}
      </div>
    );
  }
}

export default Countdown;
