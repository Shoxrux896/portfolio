import React, { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import './main.css';
import './style/font.css';

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Introduction theme={theme} toggleTheme={toggleTheme} />
      <About theme={theme}  toggleTheme={toggleTheme}/>
      <Skills theme={theme} toggleTheme={toggleTheme} />
      <Projects theme={theme} toggleTheme={toggleTheme} />
      <Contacts theme={theme} toggleTheme={toggleTheme}/>
    </div>
  );
};

export default App;
