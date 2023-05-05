import { useState } from "react";

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
  const list = [
    {
      id: "a",
      firstname: "Robin",
      lastname: "Wieruch",
      year: 1988,
    },
    {
      id: "b",
      firstname: "Dave",
      lastname: "Davidds",
      year: 1990,
    },
  ];
  return (
    <>
      <ol>
        {list.map((item) => (
          <li key={item.id}>{item.firstname} {item.lastname} - born in {item.year}</li>
        ))}
      </ol>
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
    </footer>
  );
};

export default Footer;
