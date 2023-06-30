import { useState } from "react";
import lists from "../../data/data.json";
import Button from "../Button";

const ListItems: React.FC = () => {
  const items: string[] = lists.peoples.map((item) => item.name);
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<string[]>(items);
  const addItem = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setList((currentArray) => {
      return [...currentArray, inputValue];
    });
    setInputValue("");
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
      <form onSubmit={(event) => event.preventDefault()}>
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
