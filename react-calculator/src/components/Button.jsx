import "../App.css";

function Button({ value, onButtonClick }) {
  return <button onClick={() => onButtonClick(value)}>{value}</button>;
}

export default Button;
