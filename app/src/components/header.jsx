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
const Exchange = () => {
  const [value, setValue] = useState("");
  const [side, setSide] = useState("Exchange your money from Złoty");
  const [reverse, setReverse] = useState(false);
  const exchange = () => {
    const pln = " złotych";
    const currency = document.querySelector("#currency").value;
    const quantity = document.querySelector("#quantity").value;
    if (quantity === "") {
      return "";
    }
    if (!reverse) {
      if (currency == "EUR") {
        setValue(quantity * 0.21 + " euros");
      }
      if (currency == "USD") {
        setValue(quantity * 0.24 + " dolars");
      }
      if (currency == "GBP") {
        setValue(quantity * 0.19 + " pounds");
      }
      if (currency == "JPY") {
        setValue(quantity * 32.47 + " yens");
      }
    }
    if (reverse) {
      if (currency == "EUR") {
        setValue(quantity * 4.15 + pln);
      }
      if (currency == "USD") {
        setValue(quantity * 4.66 + pln);
      }
      if (currency == "GBP") {
        setValue(quantity * 5.25 + pln);
      }
      if (currency == "JPY") {
        setValue(quantity * 0.03 + pln);
      }
    }
  };
  const reverseExchange = () => {
    setReverse(!reverse);
    setSide(
      reverse
        ? "Exchange your money from Złoty"
        : "Exchange your money to Złoty"
    );
  };
  return (
    <>
      <br />
      <label htmlFor="ex">{side}</label>
      <br />
      <input
        type="number"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        id="quantity"
        name="ex"
        placeholder="Type your ammount"
      />
      <br />
      <select id="currency">
        <option value="EUR">Euro</option>
        <option value="USD">Dolars</option>
        <option value="GBP">Pounds</option>
        <option value="JPY">Yen</option>
      </select>
      <button onClick={exchange}>Exchange</button>
      <button onClick={reverseExchange}>Reverse</button>
      <p>{value}</p>
    </>
  );
};
const Header = () => {
  return (
    <header>
      <Greetings lastTxt="on my page :D" greets="Hello" />
      <Login />
      <Exchange />
    </header>
  );
};

export default Header;
