import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };

  switchNameHandler = () => {
    console.log("Was clicked");
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[0].age}
        >
          My hoobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[0].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi I'm a react App!!!")
    // );
  }
}

export default App;
