
import React, { useState, useEffect } from "react";

import "./header.css";
import inst from "../assets/inst.svg";



const Header = ({ theme, toggleTheme }) => {
 

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  
  return(
  <header className={`header ${theme}`}>
    
      
      <nav className="nav">
      <h1>Portfolio</h1>
      <div className="nav__content-menu">
   
<ul className="nav__list">
  <li>
    <a href="#home" className="nav__list-link" onClick={(e) => handleScrollToSection(e, 'home')} >Home</a>
  </li>
  <li>
    <a href="#about" className="nav__list-link"  onClick={(e) => handleScrollToSection(e, 'about')}>About</a>
  </li>
  <li>
    <a href="#skills" className="nav__list-link"  onClick={(e) => handleScrollToSection(e, 'skills')}>Skills</a>
  </li>
  <li>
    <a href="#projects" className="nav__list-link" onClick={(e) => handleScrollToSection(e, 'projects')}>Projects</a>
  </li>
</ul>
<div className="nav__content-menu-btn">
    <div className="nav__content-menu-btn-line">

    </div>
    </div>
    </div>
    </nav>
  
     
   
    

  
    <div className="header__content">
      <div className="header__content-info">
        <h3>
        Hi, I am
        </h3>
        <h2>Shoxruh</h2>
        <p>Front-end Developer</p>
        <ul className="info-list">
          <li>
            <a href="" className="info-list-link">


            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8607 7.36697C20.6854 7.36697 23.3471 8.61918 25.2977 10.5767V10.5825C25.2977 9.64247 25.9301 8.93137 26.8043 8.93137H27.0263C28.4057 8.93137 28.682 10.2322 28.682 10.6426L28.6878 25.2518C28.5918 26.2092 29.6764 26.7041 30.2788 26.089C32.6202 23.6805 35.4264 13.6951 28.8208 7.91387C22.6603 2.51765 14.3919 3.40912 9.99586 6.4385C5.32346 9.66675 2.33686 16.7973 5.23789 23.499C8.40602 30.8053 17.4629 32.9848 22.8534 30.8111C25.5821 29.7092 26.8401 33.393 24.0038 34.599C19.7292 36.4224 7.81633 36.2362 2.25246 26.6012C-1.50651 20.0927 -1.30764 8.64347 8.66617 2.7119C16.2893 -1.82869 26.3475 -0.57069 32.4109 5.75978C38.7472 12.3839 38.3806 24.7778 32.1947 29.5959C29.3931 31.787 25.2329 29.656 25.263 26.4636L25.2318 25.423C23.2812 27.3551 20.6854 28.4882 17.8607 28.4882C12.2725 28.4882 7.35267 23.5672 7.35267 17.9848C7.35267 12.3423 12.2725 7.36928 17.8607 7.36928V7.36697ZM24.8895 17.5813C24.6779 13.4916 21.6428 11.0288 17.9751 11.0288H17.8364C13.6091 11.0288 11.2608 14.3588 11.2608 18.134C11.2608 22.367 14.0971 25.0402 17.819 25.0402C21.9735 25.0402 24.701 22.0005 24.8999 18.4045L24.8895 17.5813Z" fill="black"/>
</svg>

              
              
              
              
              
              
</a>


          </li>
          <li>
            <a href="" className="info-list-link"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4844 1.46274e-06C7.82422 -0.00390479 0 7.81641 0 17.4688C0 25.1016 4.89453 31.5899 11.7109 33.9727C12.6289 34.2032 12.4883 33.5508 12.4883 33.1055V30.0782C7.1875 30.6992 6.97266 27.1914 6.61719 26.6055C5.89844 25.3789 4.19922 25.0664 4.70703 24.4805C5.91406 23.8594 7.14453 24.6367 8.57031 26.7422C9.60156 28.2696 11.6133 28.0117 12.6328 27.7578C12.8555 26.8399 13.332 26.0196 13.9883 25.3828C8.49609 24.3985 6.20703 21.0469 6.20703 17.0625C6.20703 15.1289 6.84375 13.3516 8.09375 11.918C7.29688 9.5547 8.16797 7.53126 8.28516 7.23048C10.5547 7.02735 12.9141 8.85548 13.0977 9.00001C14.3867 8.65235 15.8594 8.46876 17.5078 8.46876C19.1641 8.46876 20.6406 8.66016 21.9414 9.01173C22.3828 8.67579 24.5703 7.10548 26.6797 7.29688C26.793 7.59766 27.6445 9.57423 26.8945 11.9063C28.1602 13.3438 28.8047 15.1367 28.8047 17.0742C28.8047 21.0664 26.5 24.4219 20.9922 25.3906C21.4639 25.8546 21.8385 26.4079 22.0941 27.0182C22.3496 27.6285 22.481 28.2837 22.4805 28.9453V33.3399C22.5117 33.6914 22.4805 34.0391 23.0664 34.0391C29.9844 31.7071 34.9648 25.1719 34.9648 17.4727C34.9648 7.81641 27.1367 1.46274e-06 17.4844 1.46274e-06Z" fill="black"/>
</svg></a>
          </li>
          <li>
            <a href="" className="info-list-link">
          <img src={inst} alt="" />
            </a>
          </li>
        </ul>
       
      </div>
      <div className="header__content-banner">
        <p>
        this is not my photo but I  hope to get one just like this 
        </p>
      </div>
    </div>

  </header>
  


  );
};

export default Header;