import CountReducer from "./Reducer/CountReducer";
import CountReducerWithReducer from "./Reducer/CountReducerWithReducer";
import MoreComplicatedReducer from "./Reducer/MoreComplicatedReducer";
import MultipleReducer from "./Reducer/MultipleReducer";
import VeryComplicatedReducerWithValue from "./Reducer/VeryComplicatedReducerWithValue";
import VeryMoreComplexReducer from "./Reducer/VeryMoreComplexReducer";

function App() {
  return (
    <div className="App">
      <CountReducer />
      <CountReducerWithReducer />
      <MoreComplicatedReducer />
      <VeryMoreComplexReducer />
      <VeryComplicatedReducerWithValue />
      <MultipleReducer />
    </div>
  );
}

export default App;
