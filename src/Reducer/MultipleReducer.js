import { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const MultipleReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>HEllo my Count is : {count}</h2>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        Add five
      </button>
      <button onClick={() => dispatch({ type: "add", value: 9 })}>
        Add five
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <hr></hr>
      <h2>Hello again my next count is {countTwo}</h2>
      <button onClick={() => dispatchTwo({ type: "add", value: 12 })}>
        Add seven
      </button>
    </div>
  );
};

export default MultipleReducer;
