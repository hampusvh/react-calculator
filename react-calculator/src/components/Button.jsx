import "../App.css";

function Button({ value, onButtonClick }) {
  return (
    <button value={value} onClick={() => onButtonClick(value)}>
      {value}
    </button>
  );
}

export default Button;
