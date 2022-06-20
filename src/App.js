import { useState, useEffect, useRef } from 'react';
import {
  shuffleTasks, printOperator, calculate, createMessage,
} from './helpers';
import './App.css';
import KeyPad from './components/keypad/KeyPad';
import Hamburger from './components/hamburger/Hamburger';
import Menu from './components/menu/Menu';

function App() {
  const Operator = {
    ADDITION: 0,
    SUBTRACTION: 1,
    MULTIPLICATION: 2,
    DIVISION: 3,
  };
  Object.freeze(Operator);
  const inputLengthLimit = 4;
  const menuItems = [
    {
      title: 'Addition',
      operatorValue: 0,
    },
    {
      title: 'Subtraction',
      operatorValue: 1,
    },
    {
      title: 'Multiplication',
      operatorValue: 2,
    },
    {
      title: 'Division',
      operatorValue: 3,
    },
  ];
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [operator, setOperator] = useState(Operator.ADDITION);
  const [currentInput, setCurrentInput] = useState('');
  const [boxOpen, setBoxOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [menuToggler, setMenuToggler] = useState(false);

  const menuContainerRef = useRef();
  const hamburgerRef = useRef();

  const close = (e) => {
    setBoxOpen(false);
    if (menuContainerRef?.current?.contains(e.target)
    || hamburgerRef?.current?.contains(e.target)) {
      return;
    }
    setMenuToggler(false);
  };

  const changeQuestion = () => {
    if (tasks.length > 0) {
      if (count >= tasks.length - 1) {
        const shuffledTasks = shuffleTasks(tasks);
        setTasks(shuffledTasks);
        setTask(shuffledTasks[0]);
        setCount(0);
      } else {
        const updatedCount = count + 1;
        setCount(updatedCount);
        setTask(tasks[updatedCount]);
      }
      setCurrentInput('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, []);

  useEffect(() => {
    /*
    TODO: Api call in sepatate file
    Connect to api
    Add level choice and send as query param
    Send arithmetic method as query param
    */
    const getTasks = async () => {
      let url = '';
      switch (operator) {
        case 0: url = './data/add.json';
          break;
        case 1: url = './data/sub.json';
          break;
        case 2: url = './data/mult.json';
          break;
        case 3: url = './data/div.json';
          break;
        default: url = './data/add.json';
      }
      setLoading('Loading...');
      setError('');
      const result = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await result.json();
      if (data.error) {
        setError(data.error);
      } else {
        const shuffledTasks = shuffleTasks(data);
        setTasks(shuffledTasks);
        if (shuffledTasks.length > 0) setTask(shuffledTasks[0]);
      }
      setCurrentInput('');
      setLoading('');
    };
    getTasks();
    // eslint-disable-next-line
  }, [operator]);

  const selectNumber = (enteredInput) => {
    if (!Number.isNaN(parseInt(enteredInput, 10)) && currentInput.length < inputLengthLimit) {
      setCurrentInput(currentInput + enteredInput.trim());
    }
  };

  const remove = () => {
    setCurrentInput('');
  };

  const submitAnswer = () => {
    if (!Number.isNaN(parseInt(task.firstNum, 10))
    && !Number.isNaN(parseInt(task.lastNum, 10))
    && !Number.isNaN(parseInt(currentInput, 10))) {
      const num1 = parseInt(task.firstNum, 10);
      const num2 = parseInt(task.lastNum, 10);
      const calculatedAnswer = calculate(num1, num2, operator);
      setMessage(createMessage(num1, num2, operator, calculatedAnswer));
      if (calculatedAnswer === parseInt(currentInput, 10)) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
      setBoxOpen(true);
      changeQuestion();
    }
  };

  const handleSetOperator = (operatorValue) => {
    setOperator(operatorValue);
  };

  const toggleMenu = () => {
    setMenuToggler(!menuToggler);
  };

  const displayError = () => (
    <div className={(error) ? 'error' : 'not-displayed'}>
      { error }
    </div>
  );

  const displayLoading = () => (
    <div className={(loading) ? 'loading' : 'not-displayed'}>
      Loading...
    </div>
  );

  const displayBox = () => (
    <div className={`${(success) ? 'box-success' : 'box-error'} ${(boxOpen) ? 'box' : 'not-displayed'}`}>
      {(!success) ? message : 'Success!'}
    </div>
  );

  return (
    <div className="App">
      <nav>
        <div className="hamburger-container" ref={hamburgerRef}>
          <Hamburger isOpen={menuToggler} onToggleHamburger={toggleMenu} />
        </div>
      </nav>
      <div className="outer-container">
        <div className={`menu-container ${(menuToggler) ? 'menu-open' : ''}`} ref={menuContainerRef}>
          <Menu menuItems={menuItems} menuWidth="300px" handleSetOperator={handleSetOperator} />
        </div>
        <div className="container">
          {displayBox()}
          {displayError()}
          {displayLoading()}
          <div className="question">
            <div>
              {(task)
                ? (
                  <span data-testid="task">
                    {`${task.firstNum} ${printOperator(operator)} ${task.lastNum} = `}
                  </span>
                ) : ''}
              <span>{currentInput}</span>
            </div>
            <span role="button" tabIndex={0} className="remove" onClick={remove} onKeyDown={remove}>x</span>
          </div>
          <div className="keypad-section">
            <KeyPad selectNumber={selectNumber} submitAnswer={submitAnswer} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
