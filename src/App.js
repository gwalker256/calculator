import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  // const [numbers, setNumber] = useState([]);
  const [userInput, setUserInput] = useState("");
  const buttonValues = [
    "+",
    "-",
    "*",
    "/",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "AC",
    "=",
  ];

  const handler = () => {
    if (userInput === "AC") {
      setUserInput("");
    } else if (userInput === "=") {
      return userInput.evaluate;
    }
    // else (add user input to string)
  };
  return (
    <div className="buttonBox">
      {buttonValues.map((item, index) => {
        return (
          <Card className="calcButtons" index={index} key={index} item={item} />
        );
      })}
    </div>
  );
};

const Card = (props) => {
  return <h2 className="calcButtons">{props.item}</h2>;
};

export default App;
