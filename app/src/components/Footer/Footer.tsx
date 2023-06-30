import { useState } from "react";
import statsProvide from "../../context/Statstoprovide";
import Describe from "./DescribeMe";
import person from "../../data/mydescribe";
import Btn from "./Btn";
import SharingState from "./SharingState";
import Book from "./Book";
import ListItems from "./ListItems";
import TestYear from "./TestYear";
import NewFetching from "./NewFetching";

const Footer: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const clickedInTwice: () => void = () => {
    setCount((count) => count + 1);
  };
  return (
    <footer>
      <Btn />
      <Btn />
      <SharingState count={count} onClick={clickedInTwice}>
        <p>
          <strong>Nest some extra jsx to different component</strong>
        </p>
      </SharingState>
      <SharingState count={count * 2} onClick={clickedInTwice} />
      <Book />
      <ListItems />
      <TestYear />
      <statsProvide.Provider value={person}>
        <Describe />
      </statsProvide.Provider>
      <NewFetching />
    </footer>
  );
};

export default Footer;
