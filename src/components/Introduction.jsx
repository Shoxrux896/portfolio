import React, { useState, useEffect } from "react";
import "../components/introduction.css";

const Introduction = ({ theme, toggleThem }) => {
  const [localTheme, setLocalTheme] = useState(theme);

  useEffect(() => {
    setLocalTheme(theme); // Должно быть "light" или "dark"
  }, [theme]);

  return (
    <section className={`introduction ${localTheme}`}>
     
      <div className="introduction__info">
        <h2>INTRODUCTION</h2>
        <p>
          Welcome to my portfolio! I’m a passionate web developer who loves creating sleek, interactive, and user-friendly websites. 
          With a strong focus on React and modern web technologies, every project here is built with clean code, performance, and great design in mind.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
