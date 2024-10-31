import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValues, setInputValue] = useState(''); // Use inputValue to manage the input state

  const handleButtonClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  const removeLastCharacter = () => {
    setInputValue((prev) => prev.slice(0, -1)); // Remove the last character
  };

  const calculateResult = () => {
    try {
      const result = eval(inputValues); // Caution: eval can be dangerous if used with untrusted input
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <div className="App align-middle">
      <div className="calendar w-full h-10 bg-slate-400 flex items-center justify-center">
        <h1 className="text-white">Calculator</h1>
      </div>
      
      <div className="cal w-48 h-32 text-center flex items-center justify-center my-4">
        <input
          type="text"
          value={inputValues} 
          placeholder="Enter value for operation"
          className="border rounded px-2 w-full text-right h-20"
          readOnly
        />
      </div>
      <div className="names w-48 h-80 flex flex-col justify-center items-center"> {/* Adjusted styles for centering */}
        <div className="flex flex-wrap justify-center">
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('1')}>1</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('2')}>2</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('3')}>3</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('4')}>4</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('5')}>5</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('6')}>6</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('7')}>7</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('8')}>8</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('9')}>9</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('0')}>0</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('.')}>.</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('00')}>00</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('+')}>+</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('-')}>-</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('*')}>*</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={() => handleButtonClick('/')}>/</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={calculateResult}>=</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={clearInput}>C</button>
          <button className="w-12 h-12 m-1 border border-red-950 hover:bg-yellow-500 transition duration-300" onClick={removeLastCharacter}>o</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
