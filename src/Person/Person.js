import React from "react";
// import Radium, { StyleRoot } from "radium";

import "./Person.css";

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
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
