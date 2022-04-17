import React from "react"; //rafce
import './Intro.css' 
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin.png'
import Instagaram from '../img/instagram.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import boy from '../img/boy.png'
import thumbup from '../img/thumbup.png'
import Crown from '../img/crown.png'
import glassesimoji from '../img/glassesimoji.png'
import FloatingDiv from './FloatingDiv'
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>hi ! I am</span>
          <span>Unais Ali</span>
          <span>I am a frontend web developer,game developer 
                and AI Engineer</span>
        </div>
        <button className="button i-button"> Hire Me</button>
     <div className="i-icons">
       <a href="#"> <img src={Github} alt="" /></a> 
       <a href="#"><img src={LinkedIn} alt="" /></a>  
       <a href="#"><img src={Instagaram} alt="" /></a>
     </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />

      <div>
<FloatingDiv/>
      </div>
      
      </div>
    </div>
  );
};

export default Intro;
