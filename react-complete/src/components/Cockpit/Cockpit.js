import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push("red");
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className={assignedClasses.cockpit}>
      <h1>Hi I'm a react App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={props.style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
