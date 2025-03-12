import React, { useState, useEffect } from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import reactLogo from "../assets/reac.svg"; 
import node from "../assets/node.svg";
import c from "../assets/c.svg";
import uzb from "../assets/uzb.svg";
import eng from "../assets/ing.svg";
import russia from "../assets/russia.svg";
import "../components/skills.css";

const Skills = ({ theme }) => {
     const [localTheme, setLocalTheme] = useState(theme);
      
       useEffect(() => {
          setLocalTheme(theme);  // Обновление локального состояния при изменении theme
       }, [theme]);
  return (
    <section className={`skils ${localTheme}`} id="skills">
      <h1>Skills</h1>

      <div className="skils__item">
        <div className="item__now">
          <h3>USING NOW:</h3>
          <div className="skill__box">
            <div className="box__card">
              <img src={html} alt="HTML" />
              <h4>HTML</h4>
            </div>
            <div className="box__card">
              <img src={css} alt="CSS" />
              <h4>CSS</h4>
            </div>
            <div className="box__card">
              <img src={js} alt="JavaScript" />
              <h4>JAVASCRIPT</h4>
            </div>
            <div className="box__card">
              <img src={reactLogo} alt="React" />
              <h4>REACT</h4>
            </div>
          </div>
        </div>

        <div className="item__now one">
          <h3>LEARNING:</h3>
          <div className="skill__box">
            <div className="box__card">
              <img src={node} alt="NodeJS" />
              <h4>NODEJS</h4>
            </div>
            <div className="box__card">
              <img src={c} alt="C++" />
              <h4>C++</h4>
            </div>
          </div>
        </div>

        <div className="item__now two">
          <h3>OTHER SKILLS:</h3>
          <div className="skill__box">
            <div className="box__card">
              <img src={eng} alt="English" />
              <h4>English B2/C1</h4>
            </div>
            <div className="box__card">
              <img src={russia} alt="Russian" />
              <h4>Russian B2/C1</h4>
            </div>
            <div className="box__card">
              <img src={uzb} alt="Uzbek" />
              <h4>Uzbek B2</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
