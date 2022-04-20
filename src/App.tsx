import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addBy = () => {
    dispatch({ type: "ADD_BY", payload: 5 });
  };
  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add value by 5</button>
    </div>
  );
}

export default App;
