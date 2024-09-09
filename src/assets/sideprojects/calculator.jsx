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
      <div className="calc-navbar">
        <Link to="/" className="calc-home-btn">
          Home
        </Link>
      </div>

      <h1 className="calc-title">Calculator</h1>

      <div className="calc-calculator">
        <input type="text" className="calc-calculator-screen" value={display || '0'} disabled />
        <div className="calc-calculator-keys">
          <button type="button" className="calc-all-clear-btn" onClick={() => handleButtonClick('all-clear')}>
            AC
          </button>
          <button type="button" className="calc-delete-btn" onClick={() => handleButtonClick('delete')}>
            DEL
          </button>
          <button type="button" className="calc-operator-btn" onClick={() => handleButtonClick('√')}>
            √
          </button>
          <button type="button" className="calc-operator-btn" onClick={() => handleButtonClick('/')}>
            ÷
          </button>

          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button type="button" className="calc-operator-btn" onClick={() => handleButtonClick('*')}>
            ×
          </button>

          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button type="button" className="calc-operator-btn" onClick={() => handleButtonClick('-')}>
            −
          </button>

          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button type="button" className="calc-operator-btn" onClick={() => handleButtonClick('+')}>
            +
          </button>

          <button type="button" className="calc-number-btn" onClick={() => handleButtonClick('0')}>
            0
          </button>
          <button type="button" className="calc-decimal-btn" onClick={() => handleButtonClick('.')}>
            .
          </button>
          <button type="button" className="calc-equal-sign-btn" onClick={() => handleButtonClick('=')}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
