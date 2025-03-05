import React from 'react';
import line from "../assets/line.svg";
import "../components/about.css";
const About = () => (
  <section className='about' id='about'>
    <div className="about__info">
<h2>ABOUT ME</h2>

<p>I’m an 18-year-old web developer passionate about building modern, interactive, and user-friendly websites. Specializing in React, Vite, and front-end development, I love turning ideas into clean, efficient, and visually appealing digital experiences.</p>


<img src={line} alt="line" />
    </div>
   
  </section>
);

export default About;