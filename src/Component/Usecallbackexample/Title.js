import react from "react";
import React from "react";
const Title = () => {
  console.log("rendered");
  return (
    <div>
      <h1>UseCAllBack</h1>
    </div>
  );
};

export default React.memo(Title);
