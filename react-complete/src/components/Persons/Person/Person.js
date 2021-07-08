import React, { useEffect, useContext } from "react";
import Person from "./Person.css";
import withClassDifferent from "../../../hoc/WithClassDifferent";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";
const person = (props) => {
  let inputElementRef = React.createRef();
  const authContext = useContext(AuthContext);
  useEffect(() => {
    inputElementRef.current.focus();
  }, []);

  return (
    <React.Fragment>
      {authContext.authenticated ? <p>authenticated</p> : <p>Please Login</p>}
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        ref={inputElementRef}
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
