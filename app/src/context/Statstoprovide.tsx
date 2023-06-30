import React from "react";

interface Person {
  name: string;
  surname: string;
  height: number;
  age: number;
}
const statsProvide = React.createContext<Person | undefined>(undefined);

export default statsProvide;
