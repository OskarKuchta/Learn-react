import { Children, useState } from "react";

function Btn() {
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

function SharingState({ count, onClick, children }) {
  return (
    <div>
      <button onClick={onClick}>Clicked {count} times</button>
      <br />
      {children}
    </div>
  );
}
function Footer() {
  const [count, setCount] = useState(0);
  const clickedInTwice = () => {
    setCount((count) => count + 1);
  };
  return (
    <footer>
      <Btn />
      <Btn />
      <SharingState count={count} onClick={clickedInTwice}>
        <p><strong>Nest some extra jsx to different component</strong></p>
      </SharingState>
      <SharingState count={count * 2} onClick={clickedInTwice} />
    </footer>
  );
}

export default Footer;
