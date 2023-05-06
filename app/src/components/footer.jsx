import { useEffect, useState, useRef } from "react";

const Btn = () => {
  const [count, setCount] = useState(0);
  const clicked = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: "red" }}
        onClick={clicked}
      >
        Clicked {count} times
      </button>
      <br />
    </>
  );
};

const SharingState = ({ count, onClick, children }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: "green" }}
        onClick={onClick}
      >
        Clicked {count} times
      </button>
      <br />
      {children}
    </div>
  );
};

const Book = () => {
  return (
    <div>
      <BookTitle title="Broken Glass" />
      <BookAuthor author="Alain Mabanckou" />
      <BookYear year="2005" />
    </div>
  );
};
const BookTitle = (props) => {
  return <h2>{props.title}</h2>;
};
const BookAuthor = (props) => {
  return <h4>{props.author}</h4>;
};
const BookYear = (props) => {
  return <p>{props.year} year</p>;
};

const ListItems = () => {
  const items = ["fd", 21, "fda", 213, "dw"];
  const [list, setList] = useState(items);
  const addItem = () => {
    const nextTask = document.querySelector("#next-task").value;
    if (nextTask.trim() == "") {
      return;
    }
    setList((currentArray) => {
      return [...currentArray, nextTask];
    });
  };
  const removeLast = () => {
    list.pop();
    setList([...list]);
  };
  return (
    <>
      <ul>
        {list.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <input type="text" id="next-task" />
      <button onClick={addItem}>Add to list</button>
      <button onClick={removeLast}>Remove last</button>
    </>
  );
};
const TestRef = () => {
  const count = useRef(0);
  const [state, setState] = useState({});
  const addRef = () => {
    count.current = count.current + 1;
    refresh()
  }
  const refresh = () => {
    setState({})
  }
  return (
    <div>
      <br />
      <p>{count.current}</p>
      <button onClick={addRef}>Click me!</button>
    </div>
  );
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
      <Book />
      <ListItems />
      <TestRef />
    </footer>
  );
};

export default Footer;
