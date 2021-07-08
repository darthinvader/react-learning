import { checkPropTypes } from "prop-types";
import React from "react";

const withClassDifferent = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClassDifferent;
