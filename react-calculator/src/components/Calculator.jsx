import "../App.css";

import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <ButtonGrid />
    </div>
  );
}

export default Calculator;
