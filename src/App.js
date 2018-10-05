import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Hunt", age: 31 },
      { name: "Damon", age: 26 },
      { name: "Jenny", age: 24 }
    ]
  };

  switchNameHandler = newName => {
    // console.log("Was clicked!");
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Damon", age: 26 },
        { name: "Jennae", age: 24 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Hunt", age: 31 },
        { name: event.target.value, age: 26 },
        { name: "Jennae", age: 24 }
      ]
    });
  };

  render() {
    //scoped styles

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hello There</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Manny Fresh")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Damonnn!")}
        >
          Hobbies: painting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" }
    //   React.createElement("h1", null, "Hi, I'm a React app")
    // );
  }
}

export default App;
