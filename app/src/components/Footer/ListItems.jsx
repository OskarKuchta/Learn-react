import { useState } from "react";
import React from "react";
import lists from "../../data/data.json";
import Button from "../Button";
const ListItems = () => {
  const items = lists.peoples.map((item) => item.name);
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(items);
  const addItem = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setList((currentArray) => {
      return [...currentArray, inputValue];
    });
    setInputValue("");
  };
  const removeLast = (event) => {
    event.preventDefault();
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
      <form htmlFor="list">
        <input
          type="text"
          id="list"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={addItem} className="btn green">
          Add to list
        </Button>
        <Button onClick={removeLast} className="btn red">
          Remove last
        </Button>
      </form>
    </>
  );
};

export default ListItems;
