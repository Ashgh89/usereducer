import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "addOne":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "addOne2":
      return { ...state, secondCounter: state.secondCounter + 1 };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const VeryMoreComplexReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count one is {count.firstCounter}</h2>
      <h2>count two is {count.secondCounter}</h2>

      <button onClick={() => dispatch({ type: "addOne" })}>add one</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

      <button onClick={() => dispatch({ type: "addOne2" })}>add one2</button>
      <button onClick={() => dispatch({ type: "decrement2" })}>
        decrement2
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default VeryMoreComplexReducer;
