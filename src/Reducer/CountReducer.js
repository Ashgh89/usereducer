import { useState } from "react";

const CountReducer = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addSix = () => {
    setCount((prevCount) => prevCount + 6);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={addOne}>add one</button>
      <button onClick={addSix}>add six</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CountReducer;

// As you see, our codes works well, but we are writting 3 handler for one state
// and if we have more and more handler, that is not going to be clean code
// there weill be many code there
// What should we do? useReducer
