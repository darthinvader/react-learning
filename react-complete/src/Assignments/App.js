import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";
class App extends Component {
  state = {
    enteredText: "",
  };

  setTextHandler = (event) => {
    console.log(event);
    this.setState({
      enteredText: event.target.value,
    });
  };

  deleteCharHandler = (index) => {
    let text = this.state.enteredText.split("");
    text.splice(index, 1);
    text = text.join("");
    console.log(text);
    this.setState({ enteredText: text });
  };

  render() {
    const characters = [...this.state.enteredText].map((char, index) => {
      return (
        <div>
          <CharComponent
            character={char}
            key={index}
            click={() => this.deleteCharHandler(index)}
          />
        </div>
      );
    });

    return (
      <div>
        <input onChange={this.setTextHandler} value={this.state.enteredText} />
        <p>{this.state.enteredText.length}</p>
        <ValidationComponent strLength={this.state.enteredText.length} />
        {characters}
      </div>
    );
  }
}

export default App;
