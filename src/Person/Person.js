import React from "react";
// import Radium, { StyleRoot } from "radium";
import Modules from "./Person.module.css";
import { EPROTONOSUPPORT } from "constants";

//import "./Person.css";

const Person = props => {
  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px"
  //   }
  // return (
  {
    /* <StyleRoot> */
  }
  {
    /* <div className="Person" style={style}> */
  }
  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error("Something went wrong");
  // }
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
