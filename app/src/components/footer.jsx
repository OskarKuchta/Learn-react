import { useState } from "react";

const Btn = () => {
  const [count, setCount] = useState(0);
  const clicked = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <button onClick={clicked}>Clicked {count} times</button>
      <br />
    </>
  );
}

const SharingState = ({ count, onClick, children }) => {
  return (
    <div>
      <button onClick={onClick}>Clicked {count} times</button>
      <br />
      {children}
    </div>
  );
}

const Book = () => {
  return <></>;
};
const BookTitle = () => {

};
const Footer = () => {
  const [count, setCount] = useState(0);
  const clickedInTwice = () => {
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
    </footer>
  );
};

export default Footer;
