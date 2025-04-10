import "../App.css";
import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

function Calculator() {
  const handleButtonClick = (value) => {
    console.log("Button:", value);
  };

  return (
    <div className="calculator">
      <Display />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
