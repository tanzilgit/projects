import { React, useState, useEffect } from "react";

export default function StockData() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState();

  const add = () => {
    
    setTotal(parseInt(number1) + parseInt(number2));
    console.log("Addition",total)
  };
  const subtract = () => {
    setTotal(number1 - number2);

  };
  const multiply = () => {
    setTotal(number1 * number2);
  };
  const divide = () => {
    setTotal(number1 / number2);
  };

  return (
    <div className="layout-column align-items-center mt-50">
      {/* <h1>{number1}</h1> */}
      <input
        type="number"
        placeholder="Enter Number"
        value={number1}
        onChange={e => setNumber1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Number"
        value={number2}
        onChange={e => setNumber2(e.target.value)}
      />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <button
        onClick={() => {
          setNumber1('');
          setNumber2('');
          setTotal('');
        }}
      >
        Reset
      </button>
      <h1>Result : {total}</h1>
    </div>
  );
}
