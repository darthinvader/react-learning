import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/persons";
import Cockpit from "../components/Cockpit/Cockpit";

class ClassApp extends Component {
  constructor(props) {
    super(props);
    console.log("[ClassApp.js] constructor");

    this.state = {
      persons: [
        { id: "asdas", name: "Max", age: 28 },
        { id: "asdas3", name: "Manu", age: 29 },
        { id: "asdadasas", name: "Stephanie", age: 26 },
      ],
      showPersons: false,
    };
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;

    this.setState({ persons: newPersons });
  };

  togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState({ showPersons: doesShow });
  };

  render() {
    let personsToShow = null;

    if (this.state.showPersons) {
      personsToShow = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {personsToShow}
      </div>
    );
  }
}

export default ClassApp;
