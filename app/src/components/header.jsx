import React from "react";

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  showGreetings = () => {
    const output = document.querySelector(".greetings-output");
    const typedName = document.querySelector("#nameValue");
    this.setState({ name: typedName.value != "" ? `Hello ${typedName.value} on my page :D` : ""});
  };
  render() {
    return (
      <div className="greetings">
        <input
          type="text"
          id="nameValue"
          pattern="[A-Za-z]"
          placeholder="Type your name"
        />
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
      <Greetings />
    </header>
  );
}

export default Header;
