import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(5));
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
