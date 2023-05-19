import { useState, useCallback, useRef } from "react";
import Button from "./Button";

const Btn = () => {
  const [count, setCount] = useState(0);
  const clicked = () => {
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

const SharingState = ({ count, onClick, children }) => {
  return (
    <div>
      <Button className="btn green" onClick={onClick}>
        Clicked {count} times
      </Button>
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
  const nextTaskRef = useRef(null);
  const addItem = () => {
    const nextTask = document.querySelector("#next-task").value;
    if (nextTask.trim() == "") {
      return;
    }
    setList((currentArray) => {
      return [...currentArray, nextTask];
    });
    nextTaskRef.current.value = "";
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
      <input type="text" id="next-task" ref={nextTaskRef}/>
      <Button onClick={addItem} className="btn green">
        Add to list
      </Button>
      <Button onClick={removeLast} className="btn red">
        Remove last
      </Button>
    </>
  );
};
const TestYear = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const click = () => {
    if (new Date().getFullYear % 2 == 0) {
      if (value.trim() == "") {
        setMessage("You forgot type your answer");
      } else if (value.toLowerCase() != "yes") {
        setMessage("Bad anserw");
      } else if (value.toLowerCase() == "yes") {
        setMessage("Correct anserw");
      }
    } else {
      if (value.trim() == "") {
        setMessage("You forgot type your answer");
      } else if (value.toLowerCase() != "no") {
        setMessage("Bad anserw");
      } else if (value.toLowerCase() == "no") {
        setMessage("Correct anserw");
      }
    }
    console.log(new Date().getFullYear % 2 == 0);
  };
  const typeAnswer = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <br />
      <p>Is the current year is divisible by 2?</p>
      <input
        type="text"
        placeholder="Type anserw here!"
        onChange={typeAnswer}
        value={value}
      />
      <Button onClick={click} className="btn blue">
        Click me!
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};
const UseCallbacks = () => {
  const [count, setCount] = useState(0);
  const clickBtn = useCallback(() => {
    // Use this option only for function with many dependecies
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <p>You clicked {count} times!</p>
      <Button onClick={clickBtn} className="btn green">
        Click me!
      </Button>
    </>
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
      <TestYear />
      <UseCallbacks />
    </footer>
  );
};

export default Footer;
