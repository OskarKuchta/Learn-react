import { useState } from "react";
import Button from "../Button";

const Btn = () => {
    const [count, setCount] = useState(0);
    const clicked = () => {
      setCount((count) => count + 1);
    };
    return (
      <>
        <Button className="btn red" onClick={clicked}>
          Clicked {count} times
        </Button>
        <br />
      </>
    );
  };

export default Btn
