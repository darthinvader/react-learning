import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  let btnClass = "";
  useEffect(() => {
    toggleButtonRef.current.click();
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Http request...
    console.log(props);
  }, [props]);

  if (props.showPersons) {
    btnClass = classes.red;
  }

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(cockpit);
