import React from "react";
import { Row } from "reactstrap";
import Counter from "./components/Counter";
import CounterIncrease from "./components/CounterIncrease";
import CounterIncreaseByTwo from "./components/CounterIncreaseByTwo";
import CounterDecrease from "./components/CounterDecrease";
import CounterMultiply from "./components/CounterMultiply";


function App() {
  return (
    <div >
      <center>
        <h1>Counter</h1>
      </center>
      <Row>
        <Counter/>
        <CounterIncrease/>
        <CounterIncreaseByTwo/>
        <CounterDecrease/>
        <CounterMultiply/>
      </Row>
    </div>
  );
}

export default App;
