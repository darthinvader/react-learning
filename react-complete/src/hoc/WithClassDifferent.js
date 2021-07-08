import { checkPropTypes } from "prop-types";
import React from "react";

const withClassDifferent = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClassDifferent;
