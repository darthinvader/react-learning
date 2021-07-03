import React from "react";

const validationComponent = (props) => {
  const msg = props.strLength <= 5 ? "Text too short" : "Text long enough";

  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

export default validationComponent;
