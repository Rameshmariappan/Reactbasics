import React, { useContext } from "react";
import { CounterContext } from "../../App";

const Newstate1 = () => {
  const UserCount = useContext(CounterContext);
  return (
    <div>
      <h1>Newstate1-{UserCount.counter}</h1>
      <div>
        <button onClick={() => UserCount.dispatchmethod("increment")}>
          Increment
        </button>
        <button onClick={() => UserCount.dispatchmethod("decrement")}>
          Decrement
        </button>
        <button onClick={() => UserCount.dispatchmethod("reset")}>Reset</button>
      </div>
    </div>
  );
};
export default Newstate1;
