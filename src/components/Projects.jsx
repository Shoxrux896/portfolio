import React, { useEffect, useState } from 'react';
import "../components/projects.css";

const Projects = () => {
  const backgrounds = [
    "url('/src/assets/grayson.png')",
    "url('/src/assets/materials.png')",
    "url('/src/assets/kong.png')",
  ];

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Shoxrux896/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data.slice(0, 3))) // Берем только 3 проекта
      .catch((error) => console.error('Ошибка:', error));
  }, []);

  return (
    <section className='projects' id='projects'>
      <div className="projects__banner">
        <h2>MY PROJECTS</h2>
      </div>
     
      <div className="projects-grid">
        {repos.map((repo, index) => ( 
           <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><div
            key={repo.id}
            className="project-card"
            style={{ backgroundImage: backgrounds[index] || "none" }} 
          >
      
           
           
            
           
          </div> 
          <h3>{repo.name}</h3></a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
