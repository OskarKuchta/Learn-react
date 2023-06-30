import { useState, useEffect } from "react";

/* class UseClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount = () => {
    this.Timer = setInterval(() => {
      this.tick();
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.Timer);
  };
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    return (
      <>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}  Write with classes is more complicated than functions */
const Clock = () => {
    useEffect(() => {
      const tick = setInterval(() => {
        setClock(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(tick); // It's important to avoid stack setInterval after mount again component
    }, []);
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    return (
      <>
        <h2>{clock}</h2>
      </>
    );
  };

export default Clock
