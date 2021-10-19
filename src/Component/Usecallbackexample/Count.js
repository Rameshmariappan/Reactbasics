import React from "react";
import App from "../../App";

const Count = ({ count, text }) => {
  console.log("student age render");
  return (
    <div>
      <h3>
        {text}-{count}
      </h3>
    </div>
  );
};
export default React.memo(Count);
