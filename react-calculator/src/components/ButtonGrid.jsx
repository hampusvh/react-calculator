import Button from "./Button";

function ButtonGrid({ onButtonClick }) {
  return (
    <div className="button-grid">
      <Button value="7" onButtonClick={onButtonClick}></Button>
      <Button value="8" onButtonClick={onButtonClick}></Button>
      <Button value="9" onButtonClick={onButtonClick}></Button>
      <Button value="/" onButtonClick={onButtonClick}></Button>
      <Button value="4" onButtonClick={onButtonClick}></Button>
      <Button value="5" onButtonClick={onButtonClick}></Button>
      <Button value="6" onButtonClick={onButtonClick}></Button>
      <Button value="*" onButtonClick={onButtonClick}></Button>
      <Button value="1" onButtonClick={onButtonClick}></Button>
      <Button value="2" onButtonClick={onButtonClick}></Button>
      <Button value="3" onButtonClick={onButtonClick}></Button>
      <Button value="-" onButtonClick={onButtonClick}></Button>
      <Button value="0" onButtonClick={onButtonClick}></Button>
      <Button value="c" onButtonClick={onButtonClick}></Button>
      <Button value="=" onButtonClick={onButtonClick}></Button>
      <Button value="+" onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default ButtonGrid;
