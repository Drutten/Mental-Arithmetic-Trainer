import './Key.css';

const Key = ({
  buttonText = '',
  buttonWidth = '60px',
  handleClick = () => {},
}) => (
  <button type="button" className="key" style={{ width: buttonWidth }} onClick={() => handleClick(buttonText)}>{buttonText}</button>
);

export default Key;
