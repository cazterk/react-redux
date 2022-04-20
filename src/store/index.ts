import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action: any) => {
  // synchronous function
  //we should not mutate the original state
  return action.type === "INCREMENT"
    ? { counter: state.counter + 1 }
    : action.type === "DECREMENT"
    ? { counter: state.counter - 1 }
    : action.type === "ADD_BY"
    ? { counter: state.counter + action.payload }
    : state;
};

const store = createStore(reducerFn);
export default store;
