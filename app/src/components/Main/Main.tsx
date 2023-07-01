import { useState } from "react";
import Images from "./Images";
import ComponentProvider from "../../context/ComponentProvider";
import CounterContext from "../../context/CounterContext";
import Button from "../Button";
import Clock from "./Clock";
import ShowData from "./showData";

const Main: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const addCounter: () => void = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <main>
      <ShowData />
      <Images />
      <Clock />
      <CounterContext.Provider value={counter}>
        <ComponentProvider />
        <Button onClick={addCounter} className="btn blue">
          Click me!
        </Button>
      </CounterContext.Provider>
    </main>
  );
};
export default Main;
