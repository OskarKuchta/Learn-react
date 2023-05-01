import { useState } from "react";

function Greetings(props) {
  const [name, setName] = useState("");
  const showGreetings = () => {
    const typedName = document.querySelector(".nameValue");
    const greetings = `${props.greets} ${typedName.value} ${props.lastTxt}`;
    if(typedName.value != "" && typedName.value.match(/^[a-zA-Z]+$/)){
      setName(greetings)
    }
    else {
      typedName.classList.add("invalid");
      setName("")
    }
  }
  const clearInvalid = () => {
    const typedName = document.querySelector(".nameValue");
    typedName.classList.remove("invalid");
  }
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
}
function Header() {
  return (
    <header>
      <Greetings lastTxt="on my page :D" greets="Hello" />
    </header>
  );
}

export default Header;
