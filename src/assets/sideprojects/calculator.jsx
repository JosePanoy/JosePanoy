import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'all-clear') {
      handleClear();
    } else if (value === 'delete') {
      handleDelete();
    } else if (value === '=') {
      calculate();
    } else {
      setDisplay(prevDisplay => prevDisplay + value);
    }
  };
  
  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };
  

  const handleClear = () => {
    setDisplay('');
    setExpression('');
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="home-btn">
          Home
        </Link>
      </div>

      <h1>Calculator</h1>

      <div className="calculator">
        <input type="text" className="calculator-screen" value={display || '0'} disabled />
        <div className="calculator-keys">
          <button type="button" className="all-clear" onClick={() => handleButtonClick('all-clear')}>
            AC
          </button>
          <button type="button" className="delete" onClick={() => handleButtonClick('delete')}>
            DEL
          </button>
          <button type="button" className="operator" onClick={() => handleButtonClick('√')}>
            √
          </button>
          <button type="button" className="operator" onClick={() => handleButtonClick('/')}>
            ÷
          </button>

          <button type="button" onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button type="button" onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button type="button" onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button type="button" className="operator" onClick={() => handleButtonClick('*')}>
            ×
          </button>

          <button type="button" onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button type="button" onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button type="button" onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button type="button" className="operator" onClick={() => handleButtonClick('-')}>
            −
          </button>

          <button type="button" onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button type="button" onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button type="button" onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button type="button" className="operator" onClick={() => handleButtonClick('+')}>
            +
          </button>

          <button type="button" onClick={() => handleButtonClick('0')}>
            0
          </button>
          <button type="button" className="decimal" onClick={() => handleButtonClick('.')}>
            .
          </button>
          <button type="button" className="equal-sign" onClick={() => handleButtonClick('=')}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
