import react, { useReducer } from "react";
const initialState = {
  first: 0,
  second: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "tamil":
      return { ...state, first: state.first + action.value };
    case "english":
      return { ...state, first: state.first - action.value };
    case "tamil2":
      return { ...state, second: state.second + action.value };
    case "english2":
      return { ...state, second: state.second - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UserCounts = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>count:{count.first}</h1>
      <h1>second:{count.second}</h1>
      <button onClick={() => dispatch({ type: "tamil", value: 1 })}>
        {" "}
        Tamil
      </button>
      <button onClick={() => dispatch({ type: "english", value: 1 })}>
        English
      </button>
      <button onClick={() => dispatch({ type: "tamil", value: 5 })}>
        {" "}
        Tamil5
      </button>
      <button onClick={() => dispatch({ type: "english", value: 5 })}>
        English5
      </button>
      <button onClick={() => dispatch({ type: "tamil2", value: 10 })}>
        {" "}
        Tamil
      </button>
      <button onClick={() => dispatch({ type: "english2", value: 10 })}>
        English
      </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
    </div>
  );
};
export default UserCounts;
