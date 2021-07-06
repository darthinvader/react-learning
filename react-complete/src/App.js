import React, { useState } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Person/Person";

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

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    },
  };

  let personsToShow = null;

  if (showPersons) {
    console.log(persons);
    personsToShow = (
      <div>
        {persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black",
    };
  }

  const classes = [];
  if (persons.length <= 2) {
    classes.push("red");
  }
  if (persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <h1>Hi I'm a react App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {personsToShow}
    </div>
  );
};

export default Radium(App);
