import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import Button from "../Button";

const NewFetching: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <>
      <Button onClick={() => setToggle(!toggle)}>Show data</Button>
      {toggle && (
        <p>
          {Array.isArray(data) && data.length > 0
            ? data[Math.floor(Math.random() * data.length)].body
            : "No data available"}
        </p>
      )}
    </>
  );
};

export default NewFetching;
