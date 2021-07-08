import React, { useCallback, useState } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

const App = (props) => {
  const [persons, setPersons] = useState([
    { id: "asdas", name: "Max", age: 28 },
    { id: "asdas3", name: "Manu", age: 29 },
    { id: "asdadasas", name: "Stephanie", age: 26 },
  ]);
  const [showPersons, setShowPersons] = useState(false);

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
  };

  const togglePersonsHandler = useCallback(() => {
    const doesShow = !showPersons;
    setShowPersons(doesShow);
  }, [showPersons]);

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
    <WithClass classes={classes.App}>
      <Cockpit
        title={props.appTitle}
        personsLength={persons.length}
        showPersons={showPersons}
        clicked={togglePersonsHandler}
      />
      {personsToShow}
    </WithClass>
  );
};

export default App;
