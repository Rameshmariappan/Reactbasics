// import react, { useState, useCallback } from "react";
import React from "react";
import UseMemo from "./usememoexample/UseMemo";
import UseRef from "./UseRefexample/UseRef";
// import Title from "./Component/Usecallbackexample/Title";
// import Count from "./Component/Usecallbackexample/Count";
// import Button from "./Component/Usecallbackexample/Button";
// import { useReducer } from "react/cjs/react.development";
// import "./App.css";
// import Newstate1 from "./Component/ShareState/Newstate1";
// import Newstate2 from "./Component/ShareState/Newstate2";
// import Newstate3 from "./Component/ShareState/Newstate3";
// import UserCounts from "./Component/useReducercount";
// import MultipleuseReducers from "./Component/MultipleuseReducers";
// import FirstContext from "./Component/Usecontecxtexamples/FirstContext";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// export const CounterContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  // const [studentage, setStudentage] = useState(10);
  // const [studentfees, setStudentfees] = useState(10000);

  // const IncrementAge = useCallback(() => {
  //   setStudentage(studentage + 1);
  // }, [studentage]);
  // const Incrementsalary = useCallback(() => {
  //   setStudentfees(studentfees + 1000);
  // }, [studentfees]);
  return (
    <div className="App">
      <UseRef />
      {/* <Title />
      <Count text="Studentage" count={studentage} />
      <Button handleonclick={IncrementAge}>Increment age</Button>
      <Count text="StudentFees" count={studentfees} />
      <Button handleonclick={Incrementsalary}>Increment salary</Button> */}
      {/* <UserCounts /> */}
      {/* <MultipleuseReducers /> */}
      {/* <UserContext.Provider value={"hello"}>
        <ChannelContext.Provider value={"mychannel"}>
          <FirstContext />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <h1>count-{count}</h1>
      <CounterContext.Provider
        value={{ counter: count, dispatchmethod: dispatch }}
      >
        <Newstate1 />
        <Newstate2 />
        <Newstate3 />
      </CounterContext.Provider> */}
    </div>
  );
}

export default App;
