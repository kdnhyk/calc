import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    color: white;
  }

  .Main {
    width: 375px;
    height: 812px;
    margin: 0 auto;
    background: #5728BB;
    .Output {
      width: 270px;
      height: 170px;
      margin: 52.5px;
      div {
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        border-bottom: 1px solid white;
        overflow-x: auto;
        -ms-overflow-style: none;
        &::-webkit-scrollbar{
          display:none;
        }
      }
    }
    .Input {
      width: 360px;
      height: 360px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      margin: 0 auto;
      button {
        background-color: #714BC1;
        color: white;
        font-size: 16px;
        border: 1px black solid;
      }
    }
  }
`;

function App() {
  const [answer, setAnswer] = useState(0);
  const [value, setVaule] = useState("");
  const [simbol, setSimbol] = useState([]);
  const [number, setNumber] = useState([]);
  const onClick = (e) => {
    const text = e.target.innerText;
    if (/[0-9]/.test(text)) {
      setVaule((temp) => temp + text);
    } else if (text === "Cls") {
      setVaule((temp) => temp.slice(0, -1));
    } else if (/[0-9]/.test(value.at(-1))) {
      if (text !== "=") {
        setVaule((temp) => temp + text);
      } else if (text === "=") {
      }
    }
  };
  return (
    <>
      <GlobalStyle />
      <div className="Main">
        <div className="Output">
          <div>{answer}</div>
          <div>{value}</div>
        </div>
        <div className="Input">
          <button onClick={(e) => onClick(e)}>7</button>
          <button onClick={(e) => onClick(e)}>8</button>
          <button onClick={(e) => onClick(e)}>9</button>
          <button onClick={(e) => onClick(e)}>/</button>
          <button onClick={(e) => onClick(e)}>4</button>
          <button onClick={(e) => onClick(e)}>5</button>
          <button onClick={(e) => onClick(e)}>6</button>
          <button onClick={(e) => onClick(e)}>*</button>
          <button onClick={(e) => onClick(e)}>1</button>
          <button onClick={(e) => onClick(e)}>2</button>
          <button onClick={(e) => onClick(e)}>3</button>
          <button onClick={(e) => onClick(e)}>-</button>
          <button onClick={(e) => onClick(e)}>Cls</button>
          <button onClick={(e) => onClick(e)}>0</button>
          <button onClick={(e) => onClick(e)}>=</button>
          <button onClick={(e) => onClick(e)}>+</button>
        </div>
      </div>
    </>
  );
}

export default App;
