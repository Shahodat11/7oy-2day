import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const increment = () => {
    setCount(count + parseInt(inputValue));
  };

  const decrement = () => {
    setCount(count - parseInt(inputValue));
  };
               
  const reset = () => {
    setCount(0);
    setInputValue('');
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div id="count">{count}</div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button className='button' onClick={increment}>Increment</button>
      <button className='button' onClick={decrement}>Decrement</button>
      <button className='button' onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp