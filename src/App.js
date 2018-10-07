import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Radium from "radium";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Hunt", age: 31 },
      { id: 2, name: "Damon", age: 26 },
      { id: 3, name: "Jenny", age: 24 }
    ],
    showPersons: false
  };

  // switchNameHandler = newName => {
  //   // console.log("Was clicked!");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 31 },
  //       { name: "Damon", age: 26 },
  //       { name: "Jennae", age: 24 }
  //     ]
  //   });
  // };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    //scoped styles

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
      // ":hover": {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    };

    //toggle

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    // let classes = ["red", "bold"].join(" ");
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello There</h1>
        <p className={classes.join(" ")}>how many</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show Names
        </button>
        {persons}
        {/* {this.state.showPersons ? ( */}

        {/* ) : null} */}
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
//export default Radium(App);
