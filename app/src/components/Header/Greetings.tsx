import { useRef, useState } from "react";
import Button from "../Button";
const Greetings = (props) => {
  const [name, setName] = useState("");
  const nameValueRef = useRef(null);
  const showGreetings = (event) => {
    event.preventDefault();
    const typedName = nameValueRef.current;
    const greetings = `${props.greets} ${typedName.value} ${props.lastTxt}`;
    if (typedName.value != "" && typedName.value.match(/^[a-zA-Z]+$/)) {
      setName(greetings);
    } else {
      typedName.classList.add("invalid");
      setName("");
    }
  };
  const clearInvalid = () => {
    nameValueRef.current.classList.remove("invalid");
  };
  return (
    <div>
      <form htmlFor="greetings">
        <input
          type="text"
          id="greetings"
          className="nameValue"
          ref={nameValueRef}
          placeholder="Type your name"
          required
          onChange={clearInvalid}
        />
        <br />
        <Button onClick={showGreetings} className="btn blue">
          Login
        </Button>
        <br />
        {name ? <p className="greetings-output">{name}</p> : null}
      </form>
    </div>
  );
};
export default Greetings;
