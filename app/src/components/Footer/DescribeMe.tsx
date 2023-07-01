import { useContext } from "react";
import statsProvide from "../../context/Statstoprovide";
import { PersonInt } from "../../data/mydescribe";

const Describe: React.FC = () => {
  let person = useContext<PersonInt>(statsProvide);
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
