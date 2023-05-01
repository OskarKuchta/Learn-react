import React from "react";

class UseClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount = () => {
    this.Timer = setInterval(() => {
        this.tick()
    }, 1000)
  }
  componentWillUnmount = () => {
    clearInterval(this.Timer)
  }
  tick = () => {
    this.setState({
        date: new Date()
    })
  }
  render() {
    return (
      <>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}

function Main() {
  return (
    <main>
      <UseClass />
    </main>
  );
}
export default Main;
