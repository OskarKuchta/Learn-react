import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import Button from "../Button";

const NewFetching = () => {
  const [toggle, setToggle] = useState(false);
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "GET",
    }
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Button onClick={() => setToggle(!toggle)}>Show data</Button>
      {toggle && <p>{data[Math.floor(Math.random() * 100)].body}</p>}
    </>
  );
};

export default NewFetching;
