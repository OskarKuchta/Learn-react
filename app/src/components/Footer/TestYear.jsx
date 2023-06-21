import { useState } from "react";
import Button from "../Button";


const TestYear = () => {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
  
    const click = (event) => {
      event.preventDefault();
      if (new Date().getFullYear % 2 == 0) {
        if (value.trim() == "") {
          setMessage("You forgot type your answer");
        } else if (value.toLowerCase() != "yes") {
          setMessage("Bad anserw");
        } else if (value.toLowerCase() == "yes") {
          setMessage("Correct anserw");
        }
      } else {
        if (value.trim() == "") {
          setMessage("You forgot type your answer");
        } else if (value.toLowerCase() != "no") {
          setMessage("Bad anserw");
        } else if (value.toLowerCase() == "no") {
          setMessage("Correct anserw");
        }
      }
      console.log(new Date().getFullYear % 2 == 0);
    };
    const typeAnswer = (e) => {
      setValue(e.target.value);
    };
  
    return (
      <div>
        <br />
        <p>Is the current year is divisible by 2?</p>
        <form htmlFor="answer">
          <input
            type="text"
            id="answer"
            placeholder="Type anserw here!"
            onChange={typeAnswer}
            value={value}
          />
          <Button onClick={click} className="btn blue">
            Click me!
          </Button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  };

export default TestYear
