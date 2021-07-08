import React, { useEffect } from "react";
import Person from "./Person.css";
import withClassDifferent from "../../../hoc/WithClassDifferent";
import PropTypes from "prop-types";

const person = (props) => {
  useEffect(() => {
    this.inputElement.focus();
  }, []);

  return (
    <React.Fragment>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        ref={(inputEl) => {
          this.inputElement = inputEl;
        }}
        onChange={props.changed}
        value={props.name}
      />
    </React.Fragment>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClassDifferent(person, Person.Person);
