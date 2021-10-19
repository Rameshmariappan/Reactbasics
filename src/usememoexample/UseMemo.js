import React from "react";
import { useState, useMemo } from "react";

const UseMemo = () => {
  const [counterone, setCounterone] = useState(0);
  const [countertwo, setCountertwo] = useState(0);

  const CounterOneChange = () => {
    setCounterone(counterone + 1);
  };
  const CounterTwoChange = () => {
    setCountertwo(countertwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;

    return counterone % 2 === 0;
  }, [counterone]);
  return (
    <div>
      <h3>{counterone}</h3>
      <button onClick={CounterOneChange}>Counteronevalue</button>
      <span>{isEven ? "Even" : "odd"}</span>
      <h3>{countertwo}</h3>
      <button onClick={CounterTwoChange}>Countertwovalue</button>
    </div>
  );
};

export default UseMemo;
