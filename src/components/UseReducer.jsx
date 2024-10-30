import { useReducer } from "react";
let initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increase = () => {
    dispatch({ type: "increment" });
  };
  const decrease = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
};

export default UseReducer;
