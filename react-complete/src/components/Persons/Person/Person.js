import React from "react";
import Person from "./Person.css";
import withClassDifferent from "../../../hoc/WithClassDifferent";

const person = (props) => (
  <React.Fragment>
    <p onClick={props.click}>
      I'm {props.name} and I am {props.age} years old!
    </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
  </React.Fragment>
);
export default withClassDifferent(person, Person.Person);
