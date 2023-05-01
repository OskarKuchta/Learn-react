import React from "react";

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      inputValue: ""
    };
  }
  showGreetings = () => {
    const typedName = document.querySelector(".nameValue");
    this.setState({
      name:
        (typedName.value != "" && typedName.value.match(/^[a-zA-Z]/))
          ? `${this.props.greets} ${typedName.value} ${this.props.lastTxt}`
          : typedName.classList.add("invalid"),
    });
  };
  clearInvalid = () => {
    const typedName = document.querySelector(".nameValue");
    this.setState({
      inputValue: typedName.value != "" ? typedName.classList.remove("invalid") : ""
    })
  }
  render() {
    return (
      <div className="greetings">
        <input
          type="text"
          className="nameValue"
          pattern="[A-Za-z]"
          placeholder="Type your name"
          required
          onChange={this.clearInvalid}
        />
        <br />
        <button onClick={this.showGreetings} className="greetings-btn">
          Login
        </button>
        <br />
        <p className="greetings-output">{this.state.name}</p>
      </div>
    );
  }
}

function Header() {
  return (
    <header>
      <Greetings lastTxt="on my page :D" greets="Hello" />
    </header>
  );
}

export default Header;
