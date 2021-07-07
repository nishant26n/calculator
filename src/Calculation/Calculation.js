import React, { useState } from "react";
import "./Calculation.css";

const Calculation = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clearAll = () => {
    setResult("");
  };

  const clear = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(result.toString()));
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <form>
          <input type="text" value={result} onChange={clearAll} readOnly />
        </form>
      </div>

      <div className="keypad">
        <button onClick={clearAll} id="clearAll" className="clear-all">
          AC
        </button>
        <button onClick={clear} id="backspace" className="clear">
          C
        </button>
        <button className="symbol" onClick={handleClick} name="%">
          %
        </button>
        <button className="symbol" onClick={handleClick} name="/">
          /
        </button>
        <button className="num-btn" onClick={handleClick} name="7">
          7
        </button>
        <button className="num-btn" onClick={handleClick} name="8">
          8
        </button>
        <button className="num-btn" onClick={handleClick} name="9">
          9
        </button>
        <button className="symbol" onClick={handleClick} name="*">
          x
        </button>
        <button className="num-btn" onClick={handleClick} name="4">
          4
        </button>
        <button className="num-btn" onClick={handleClick} name="5">
          5
        </button>
        <button className="num-btn" onClick={handleClick} name="6">
          6
        </button>
        <button className="symbol" onClick={handleClick} name="-">
          -
        </button>
        <button className="num-btn" onClick={handleClick} name="1">
          1
        </button>
        <button className="num-btn" onClick={handleClick} name="2">
          2
        </button>
        <button className="num-btn" onClick={handleClick} name="3">
          3
        </button>
        <button className="symbol" onClick={handleClick} name="+">
          +
        </button>
        <button className="num-btn" onClick={handleClick} name="0">
          0
        </button>
        <button className="symbol">.</button>

        <button onClick={calculate} className="symbol" name="=">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculation;
