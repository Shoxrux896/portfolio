import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import reac from "../assets/reac.svg";
import "../components/skills.css";
import node from "../assets/node.svg";
import c from "../assets/c.svg";
import uzb from "../assets/uzb.svg";
import ing from "../assets/ing.svg";
import russia from "../assets/russia.svg";

const Skils = ()=>{
return(
<section className="skils"id="skills">

<h1>Skils</h1>



<div className="skils__item">
<div className="item__now">
    <h3>USING NOW:</h3>
    <div className="skill__box">

<div className="box__card">
<img src={html} alt="" />

<h4>HTML</h4>

</div>
<div className="box__card">
<img src={css} alt="" />

<h4>CSS</h4>

</div>
<div className="box__card">
<img src={js} alt="" />

<h4>JAVASCRIPT</h4>

</div>
<div className="box__card">
<img src={reac} alt="" />

<h4>REACT</h4>

</div>

    </div>
</div>
<div className="item__now one">

<h3>LEARNING:</h3>
<div className="skill__box">

    <div className="box__card">
        <img src={node} alt="" />

        <h4>NODEJS</h4>
    </div>
    <div className="box__card">
        <img src={c} alt="" />

        <h4>C++</h4>
    </div>
</div>


</div>
    <div className="item__now two">
     <h3>OTHER SKILLS:</h3>
     <div className="skill__box">
    <div className="box__card">
        <img src={ing} alt="" />

        <h4>English B2/C1</h4>

    </div>
    <div className="box__card">
        <img src={russia} alt="" />

        <h4>Russian B2/C1</h4>
    </div>
    <div className="box__card">
        <img src={uzb} alt="" />

        <h4>Uzbek B2</h4>
    </div>

    </div>
    </div>
</div>
</section>



)



}
export default Skils;