import React, { useState } from "react";
import "./App.css";
import Radium from "radium";
import Persons from "../components/Persons/persons";
import Cockpit from "../components/Cockpit/Cockpit";

const App = () => {
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

  const togglePersonsHandler = () => {
    const doesShow = !showPersons;
    setShowPersons(doesShow);
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
    <div className="App">
      <Cockpit persons={persons} style={null} clicked={togglePersonsHandler} />
      {personsToShow}
    </div>
  );
};

export default Radium(App);
