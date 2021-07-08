import { checkPropTypes } from "prop-types";
import React from "react";

const withClass = (props) => (
  <div className={props.classes}>{props.children}</div>
);

export default withClass;
