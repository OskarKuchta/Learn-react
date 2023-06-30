import { useContext } from "react";
import CounterContext from "./CounterContext";
const componentProvider: React.FC = () => {
  let counter: number = useContext(CounterContext);
  return (
    <>
      <p>You clicked {counter} times!</p>
    </>
  );
};

export default componentProvider;
