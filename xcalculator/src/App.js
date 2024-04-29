
import './App.css';
import {useState} from "react";

function App() {
  const[input, setInput] = useState("");
  const[result, setResult] = useState("");

  const handleClick = (e) => {
    setInput((prev) => prev + e.target.name);
  };

  

  const calculate = () => {
    try {
      const result = eval(input);
      if(input === ""){
        setResult('Error')
      }else{
      setResult(result);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = ()=>{
    setInput("");
    setResult("");
  };
  
  return (
    <div className="App">
      <div><h1>React Calculator</h1></div>
      <input type='text' value={input} readOnly/>
      <div className='result'>
        {result}
      </div>
      
      <div className='keypad'>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="*" onClick={handleClick}>*</button>
        <button onClick={clear}>C</button>
        <button name="0" onClick={handleClick}>0</button>
        <button onClick={calculate}>=</button>
        <button name="/" onClick={handleClick}>/</button>
      </div>
    </div>
  );
}

export default App;
