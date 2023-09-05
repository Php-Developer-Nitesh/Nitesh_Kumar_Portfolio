import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do</span>
      <span className="skillDesc">
        A full-stack developer is a versatile professional skilled in both
        front-end and back-end web development, capable of creating and
        maintaining entire web applications. They work with various
        technologies, databases, and frameworks to deliver comprehensive,
        end-to-end solutions.
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h1>Backend Development</h1>
            <p>I work as a Php Developer.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h1>Website Design</h1>
            <p>I work as a Frontend Developer as React Developer</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h1>App Design</h1>
            <p>Using The React Native Language</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
