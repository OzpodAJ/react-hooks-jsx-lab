import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
      <p>Sometimes there are demons at the foot of my bed playing scrabble.</p>
      <img src={image} alt="I made this"/>
  </div>;
}

export default About;
