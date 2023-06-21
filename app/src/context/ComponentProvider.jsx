import { useContext } from "react";
import CounterContext from "./CounterContext";
const componentProvider = () => {
  let counter = useContext(CounterContext);
  return (
    <>
      <p>You clicked {counter} times!</p>
    </>
  );
};

export default componentProvider;