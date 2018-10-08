import React from "react";
import Modules from "./Person.module.css";

const Person = props => {
  return (
    <div className={Modules.Person}>
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;