import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I am a software engineer who is passionate about building web applications. I have a background in computer science and a passion for learning new things. I am currently working as a software engineer at <a href="https://www.linkedin.com/company/linkedin/">LinkedIn</a>.</p>
    <img src={image} alt="I made this" />
  </div>);
}

export default About;
