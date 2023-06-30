import { useState } from "react";
import Button from "../Button";

const Btn: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const clicked: () => void = () => {
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

export default Btn;
