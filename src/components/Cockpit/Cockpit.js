import React from "react";

import Modules from "./Cockpit.module.css";

const Cockpit = props => {
  let btnClass = "";
  if (props.showPersons) {
    btnClass = Modules.Red;
  }

  let classes = [];
  if (props.persons.length <= 2) {
    classes.push(Modules.Red);
  }
  if (props.persons.length <= 1) {
    classes.push(Modules.Bold);
  }
  return (
    <div className={Modules.Cockpit}>
      <h1>Hello There</h1>
      <p className={classes.join(" ")}>how many</p>
      <button className={btnClass} onClick={props.clicked}>
        Show Names
      </button>
    </div>
  );
};

export default Cockpit;
