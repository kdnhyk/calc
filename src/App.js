import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    color: white;
    width: 375px;
    height: 812px;
    margin: 10px auto;
  }
`;

const AnswerWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow-x: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Answer = styled.div`
  width: 99%;
  height: fit-content;
  text-align: end;
  font-size: 27px;
  color: grey;
`;

const Input = styled.div`
  width: 99%;
  height: 63px;
  text-align: end;
  font-size: 54px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 360px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  .TopBtn {
    background: #a5a5a5;
  }
  .Simbol {
    background: #fea00b;
  }
  .ZeroBtn {
    grid-column: 1/3;
  }
`;

const Button = styled.button`
  background-color: #333333;
  color: white;
  font-size: 16px;
  border: 1px black solid;
  border-radius: 12px;
`;

function App() {
  const [answer, setAnswer] = useState("");
  const [value, setVaule] = useState("");
  const [isDot, setIsDot] = useState(false);
  const [simbol, setSimbol] = useState("");
  const [isActivated, setIsActivated] = useState(false);

  const onCalculate = () => {
    if (simbol === "+") {
      setAnswer((prev) => String(Number(prev) + Number(value)));
    } else if (simbol === "-") {
      setAnswer((prev) => String(Number(prev) - Number(value)));
    } else if (simbol === "*") {
      setAnswer((prev) => String(Number(prev) * Number(value)));
    } else if (simbol === "/") {
      setAnswer((prev) => String(Number(prev) / Number(value)));
    }
    setVaule(() => "");
  };

  const onClear = () => {
    setVaule(() => "");
    setAnswer(() => "");
    setSimbol(() => "");
    setIsDot(() => false);
    setIsActivated(() => false);
  };

  const onDelete = () => {
    if (value.slice(-1) === ".") {
      setIsDot(() => false);
    }
    setVaule((prev) => prev.slice(0, -1));
  };

  const onPercentage = () => {
    setVaule((prev) => prev / 100);
  };

  const onClickNumber = (num) => {
    if (isActivated) {
      setVaule(() => "");
      setIsActivated(() => false);
    }
    setVaule((prev) => prev + num);
  };

  const onClickDot = () => {
    if (!isDot) {
      setVaule((prev) => prev + ".");
      setIsDot(() => true);
    }
  };

  const onClickSimbol = (s) => {
    if (simbol === "") {
      setAnswer(() => value);
      setSimbol(() => s);
      setIsActivated(() => true);
    } else if (simbol !== "") {
      setSimbol(() => s);
      onCalculate();
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="Main">
        <AnswerWrapper>
          <Answer>{answer}</Answer>
          <Input>{value}</Input>
        </AnswerWrapper>
        <ButtonWrapper>
          <Button className="TopBtn" onClick={onClear}>
            AC
          </Button>
          <Button className="TopBtn" onClick={onDelete}>
            DEL
          </Button>
          <Button className="TopBtn" onClick={onPercentage}>
            %
          </Button>
          <Button className="Simbol" onClick={() => onClickSimbol("/")}>
            /
          </Button>
          <Button onClick={() => onClickNumber(7)}>7</Button>
          <Button onClick={() => onClickNumber(8)}>8</Button>
          <Button onClick={() => onClickNumber(9)}>9</Button>
          <Button className="Simbol" onClick={() => onClickSimbol("*")}>
            *
          </Button>
          <Button onClick={() => onClickNumber(4)}>4</Button>
          <Button onClick={() => onClickNumber(5)}>5</Button>
          <Button onClick={() => onClickNumber(6)}>6</Button>
          <Button className="Simbol" onClick={() => onClickSimbol("-")}>
            -
          </Button>
          <Button onClick={() => onClickNumber(1)}>1</Button>
          <Button onClick={() => onClickNumber(2)}>2</Button>
          <Button onClick={() => onClickNumber(3)}>3</Button>
          <Button className="Simbol" onClick={() => onClickSimbol("+")}>
            +
          </Button>
          <Button className="ZeroBtn" onClick={() => onClickNumber(0)}>
            0
          </Button>
          <Button onClick={onClickDot}>.</Button>
          <Button className="Simbol" onClick={onCalculate}>
            =
          </Button>
        </ButtonWrapper>
      </div>
    </>
  );
}

export default App;
