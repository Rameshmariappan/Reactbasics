import React from "react";

const Button = ({ handleonclick, children }) => {
  console.log(`${children} is rendered`);
  return (
    <div>
      <button onClick={handleonclick}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
