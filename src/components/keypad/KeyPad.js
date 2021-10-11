import Key from '../key/Key';
import './KeyPad.css';

const KeyPad = ({
  selectNumber,
  submitAnswer,
}) => (
  <div className="key-pad">
    <div className="row">
      <Key buttonText="7" handleClick={selectNumber} />
      <Key buttonText="8" handleClick={selectNumber} />
      <Key buttonText="9" handleClick={selectNumber} />
    </div>

    <div className="row">
      <Key buttonText="4" handleClick={selectNumber} />
      <Key buttonText="5" handleClick={selectNumber} />
      <Key buttonText="6" handleClick={selectNumber} />
    </div>

    <div className="row">
      <Key buttonText="1" handleClick={selectNumber} />
      <Key buttonText="2" handleClick={selectNumber} />
      <Key buttonText="3" handleClick={selectNumber} />
    </div>

    <div className="row">
      <Key buttonText="0" handleClick={selectNumber} />
      <Key buttonText="Submit" buttonWidth="128px" handleClick={submitAnswer} />
    </div>
  </div>
);

export default KeyPad;
