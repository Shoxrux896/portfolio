import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './main.css';
import './style/font.css';
import Intorduction from './components/Inrtroduction'; 
import Skils from './components/Skills'; 
import Contacts from './components/Contacts';


const themes = ["light", "dark", "blue", "green", "pink"];

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => setThemeIndex((themeIndex + 1) % themes.length);

  
  return (
    <div>
         <Header theme={themes} toggleTheme={toggleTheme} />
      <Intorduction theme={themes[themeIndex]} />
      <About theme={themes[(themeIndex + 1) % themes.length]} />
      <Skils theme={themes[(themeIndex + 2) % themes.length]} />
      <Projects theme={themes[(themeIndex + 3) % themes.length]} />
      <Contacts theme={themes[(themeIndex + 4) % themes.length]} />
    </div>
  );
};

export default App;
