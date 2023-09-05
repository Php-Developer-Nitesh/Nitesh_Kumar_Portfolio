import React from "react";
import "./intro.css";
import Nitesh from "../../assets/Nitesh_kumar.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContet">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Nitesh</span>
          <br />
          FullStack Developer
        </span>
        <p className="introPara">
          As a full-stack developer, I bridge the gap between design and <br />
          functionality, crafting responsive web applications with versatile
          <br />
          skills in both front-end and back-end technologies.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={Nitesh} alt="" className="bg" />
    </section>
  );
};
export default Intro;
