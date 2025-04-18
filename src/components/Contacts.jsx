import arrow from "../assets/arrow.svg";
import React, { useState, useEffect } from "react";

const Contacts =({  theme  }) =>{
     const [localTheme , setLocalTheme] = useState(theme);
useEffect(() => {
      setLocalTheme(theme); 
   }, [theme]);
    const handleScrollToSection = (e , targetId) => {
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

<section className={`contact ${localTheme}`} id="contact">
    <h2 className="title">CONTACTS</h2>
<div className="contact__info">
<input className="name" type="text" placeholder="ENTER YOUR NAME*" />
<input className="email" type="text" placeholder="ENTER YOUR EMAil*" />
<input className="number" type="text" placeholder="PHONE NUMBER*" />
<input className="message" type="text" placeholder="YOUR MESSAGE*" />
<button>
SUBMIT
</button>
</div>
<div className="back">
<a href="#home"   onClick={(e) => handleScrollToSection(e, 'home')}>
<img src={arrow} alt="" />
</a>
<p>
BACK TO TOP
</p>


</div>
   



</section>



);


};
export default Contacts;