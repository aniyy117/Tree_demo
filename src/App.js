import "./styles.css";
import { useEffect } from "react";
import Family from "./Family";

export default function App() {
  const familyTree = {
    //Grandfather
    name: "John",
    age: 90,
    color: "red",
    children: [
      {
        name: "Mary",
        age: 60,
        color: "blue"
      },
      {
        name: "Arthur",
        age: 60,
        color: "yellow",
        children: [
          {
            name: "Lily",
            age: 35,
            color: "green",
            children: [
              {
                name: "Hank",
                age: 60,
                color: "pink"
              },
              {
                name: "Henry",
                age: 57,
                color: "pink"
              }
            ]
          },
          {
            name: "Billy",
            age: 37,
            color: "lightblue"
          }
        ]
      },
      {
        name: "Dolores",
        age: 55,
        color: "red"
      }
    ]
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Family familyTree={familyTree} />
    </div>
  );
}
