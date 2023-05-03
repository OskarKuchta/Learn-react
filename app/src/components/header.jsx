import { useState } from "react";

const Greetings = (props) => {
  const [name, setName] = useState("");
  const showGreetings = () => {
    const typedName = document.querySelector(".nameValue");
    const greetings = `${props.greets} ${typedName.value} ${props.lastTxt}`;
    if (typedName.value != "" && typedName.value.match(/^[a-zA-Z]+$/)) {
      setName(greetings);
    } else {
      typedName.classList.add("invalid");
      setName("");
    }
  };
  const clearInvalid = () => {
    const typedName = document.querySelector(".nameValue");
    typedName.classList.remove("invalid");
  };
  return (
    <div className="greetings">
      <input
        type="text"
        className="nameValue"
        placeholder="Type your name"
        required
        onChange={clearInvalid}
      />
      <br />
      <button onClick={showGreetings} className="greetings-btn">
        Login
      </button>
      <br />
      <p className="greetings-output">{name}</p>
    </div>
  );
};
const Login = () => {
  const [checkstatus, setCheckstatus] = useState(false);
  const switchState = () => {
    setCheckstatus((current) => !current);
  };
  if (checkstatus == false) {
    return (
      <>
        <p>Need to login</p>
        <button onClick={switchState}>Login</button>
        <br />
      </>
    );
  } else {
    return (
      <>
        <p>Welcome on page</p>
        <button onClick={switchState}>Logout</button>
        <br />
      </>
    );
  }
};
const Header = () => {
  return (
    <header>
      <Greetings lastTxt="on my page :D" greets="Hello" />
      <Login />
    </header>
  );
};

export default Header;
