import { useContext } from "react";
import statsProvide from "../../context/Statstoprovide";

const Describe = () => {
  let person = useContext(statsProvide);
  return (
    <>
      <h2>
        Hello my name is {person.name} {person.surname}.
      </h2>
      <p>
        My age is {person.age} and I have {person.height} cm height.
      </p>
    </>
  );
};

export default Describe;
