import { useRef, useState } from "react";
import Button from "../Button";

interface Greetings {
  lastTxt: string;
  greets: string;
}

const Greetings: React.FC<Greetings> = (props) => {
  const [name, setName] = useState("");
  const nameValueRef = useRef<HTMLInputElement>(null);
  const showGreeting = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const typedName = nameValueRef.current;
    const greetings: string = `${props.greets} ${typedName.value} ${props.lastTxt}`;
    if (typedName.value != "" && typedName.value.match(/^[a-zA-Z]+$/)) {
      setName(greetings);
    } else {
      typedName.classList.add("invalid");
      setName("");
    }
  };
  const clearInvalid: () => void = () => {
    nameValueRef.current.classList.remove("invalid");
  };
  return (
    <div>
      <form>
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
        <Button onClick={showGreeting} className="btn blue">
          Login
        </Button>
        <br />
        {name ? <p className="greetings-output">{name}</p> : null}
      </form>
    </div>
  );
};
export default Greetings;
