import React from "react";
import { useContext } from "react";
import { CounterContext } from "../../App";

const Newstate6 = () => {
  const UserCount = useContext(CounterContext);
  return (
    <div>
      <h1>count-{UserCount.counter}</h1>
      <button onClick={() => UserCount.dispatchmethod("increment")}>
        Increment
      </button>
      <button onClick={() => UserCount.dispatchmethod("decrement")}>
        Decrement
      </button>
      <button onClick={() => UserCount.dispatchmethod("reset")}>Reset</button>
    </div>
  );
};
export default Newstate6;
