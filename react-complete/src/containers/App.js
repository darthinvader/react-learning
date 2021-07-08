import React, { useCallback, useState } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import withClassDifferent from "../hoc/WithClassDifferent";
import AuthContext from "../context/auth-context";

const App = (props) => {
  const [persons, setPersons] = useState([
    { id: "asdas", name: "Max", age: 28 },
    { id: "asdas3", name: "Manu", age: 29 },
    { id: "asdadasas", name: "Stephanie", age: 26 },
  ]);
  const [showPersons, setShowPersons] = useState(false);
  const [counter, setCounter] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);
  const deletePersonHandler = (personIndex) => {
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    setPersons(newPersons);
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...persons[personIndex] };
    person.name = event.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = person;

    setPersons(newPersons);
    setCounter((prevState, props) => prevState + 1);
  };

  const togglePersonsHandler = useCallback(() => {
    const doesShow = !showPersons;
    setShowPersons(doesShow);
  }, [showPersons]);

  const loginHandler = () => {
    setAuthenticated(true);
  };

  let personsToShow = null;

  if (showPersons) {
    personsToShow = (
      <div>
        <Persons
          persons={persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
      </div>
    );
  }

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          authenticated: authenticated,
          login: loginHandler,
        }}
      >
        <Cockpit
          title={props.appTitle}
          personsLength={persons.length}
          showPersons={showPersons}
          clicked={togglePersonsHandler}
        />
        {personsToShow}
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default withClassDifferent(App, classes.App);
