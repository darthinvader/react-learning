import React from "react";
import Person from "./Person.css";
import Aux from "../../../hoc/Auxiliary";

const person = (props) => (
  <React.Fragment>
    <div className={Person.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  </React.Fragment>
);
export default person;
