import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  let btnClass = "";
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Http request...
    console.log(props);
    return () => {
      console.log(props);
    };
  }, [props]);
  if (props.showPersons) {
    btnClass = classes.red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
