import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case "addOne":
      return state + 1;
    case "addSix":
      return state + 6;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CountReducerWithReducer = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count is {count}</h2>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addSix")}>add six</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default CountReducerWithReducer;
// very similar to useState

// 1. import useReducer hook
// 2. useReducer (reducer, initialState)
// reducer => is a function
// return : [count, dispatch]
