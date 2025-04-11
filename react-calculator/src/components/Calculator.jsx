import "../App.css";
import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

function Calculator() {
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const [input, setInput] = useState("");

  return (
    <div className="calculator">
      <Display input={input} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
