import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import background from "../src/background2.gif";
import picture from "../src/picture.jpg";
import html1 from "../src/ResturantTinder.png";
import html2 from "../src/DailyPostcard.png";
import unity1 from "../src/TacoMan.png"
import python1 from "../src/AI3.jpeg"
import other1 from "../src/tdm.png"


var loaded = 0;
function App() {
  
  function move1(){
    if(loaded === 0) {
      for(var i = 1; i< 7; i++) {
        console.log(i);
        var str = "skill" + i.toString(); 
        var percentage;
        switch(i){
          case 1:
            percentage = 90;
            break;
          case 2:
            percentage = 80;
            break;
          case 3:
            percentage = 70;
            break;
          case 4:
            percentage = 65;
            break;
          case 5:
            percentage = 70;
            break;
          case 6:
            percentage = 70;
            break;
          default:
            percentage = 0;
        }
        move(str, percentage);
      }
      loaded = 1;
    }
  }
  function move(str, percentage) {
        var elem = document.getElementById(str);   
        var width = 20;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= percentage) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
           
          }
        }
        
    }
  
    
    
  return (
    <div className="App">
      <section id="page1">
        <p id="page1_text">
          Hello, I'm <span style={{ color: "#ff1a8c" }}>Gharam Alsaedi</span>
          <div>I'm a web and game developer.</div>
          <a href="#page2" id="buttonTo2nd">
            View work
          </a>
        </p>
        <img className="first_img" src={background} alt=""></img>
      </section>
      <div id="navbar">
        <a href="#page1">Home</a>
        <a href="#page2">About</a>
        <a href="#page3">Projects</a>
        <a href="#page4">Contact</a>
      </div>
      <section id="page2" onMouseOver={move1}>
        <div id="title">[ About ]</div>
        <div id ="page2_content">
          <div id="personal_pic">
            <img className="picture" src={picture} alt="<>"></img>
          </div>
          <p id="page2_text">
            I'm currently a Computer Science student at <a href = "https://www.ucdavis.edu" target = "blank">University of California,
            Davis.</a>
            <div>
              I enjoy both crafting an idea into a video game, and building
              innovative websites.
            </div>
          </p>
          
        </div>
        <div id = "subtitle">Skills</div>
        <div className= "SkillBars">
          <div className = "barBackground" >
            <span style = {{position: "absolute", paddingLeft: "82%", paddingTop: "7px", color: "white"}}>
              90%
              </span>
            <div  id = "skill1" className = "skill">
              <div className = "barText">
                HTML & CSS  
              </div>
              
            </div>
           
          </div>
          <div className = "barBackground" >
          <span style = {{position: "absolute", paddingLeft: "82%", paddingTop: "7px", color: "white"}}>
            80%
            </span>
            <div id = "skill2" className = "skill">
            <div className = "barText">
                JavaScript  
              </div>
            </div>
          </div>
          <div className = "barBackground" >
          <span style = {{position: "absolute", paddingLeft: "82%", paddingTop: "7px", color: "white"}}>
            70%
            </span>
            <div id = "skill3" className = "skill">
            <div className = "barText">
                SQL  
              </div>
            </div>
          </div>
          <div className = "barBackground" >
          <span style = {{position: "absolute", paddingLeft: "82%", paddingTop: "7px", color: "white"}}>
            65%
            </span>
            <div id = "skill4" className = "skill">
            <div className = "barText">
                Unity  
              </div>
            </div>
          </div>
          <div className = "barBackground" >
          <span style = {{position: "absolute", paddingLeft: "82%", paddingTop: "7px", color: "white"}}>
            70%
            </span>
            <div id = "skill5" className = "skill">
            <div className = "barText">
                C#  
              </div>
            </div>
          </div>
          <div className = "barBackground" >
            <span style = {{position: "absolute", paddingLeft: "82%", paddingTop: "7px", color: "white"}}>
              70%
              </span>
            <div id = "skill6" className = "skill">
            <div className = "barText">
                Python  
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section id="page3">
        <div id = "title">
            [Projects]
          </div>
          <div id = "filtersContainer">
            <button className = "btn active" >All</button>
            <button className = "btn" >HTML/JavaScript</button>
            <button className = "btn"  >Unity</button>
            <button className = "btn">Python</button>
            <button className = "btn" >Other</button>
          </div>
          <div className = "gallery">
            <div className = "Projects Html">
              <img id = "ProjectImg" src = {html1} alt="" style={{width: "100%"}}></img>
              </div>
              <div className = "Projects Html">
              <img id = "ProjectImg"  src = {html2} alt = "" style={{width: "100%"}}></img>
              </div>
            <div className = "Projects Unity">
              <img id = "ProjectImg" src = {unity1} alt="" style={{width: "100%"}}></img>
            </div>
            <div className = "Projects Other">
              <img id = "ProjectImg" src = {other1} alt="" style={{width: "100%"}}></img>
            </div>
            <div className = "Projects Python">
              <img id = "ProjectImg" src = {python1} alt="" style={{width: "100%"}}></img>
            </div>
          </div>
      </section>
        
      <section id="page4"> <div id = "title">
            [Contact]
          </div>
          <div id = "page4_sub">Lets get in touch</div>
         <div id = "email"> <a id = "emailBtn" href="mailto:gharamj19@gmail.com">Say Hello</a></div>
          <footer>
            <a href = "#page1">^</a>
            <div id = "mediaLinks">
              <a href = "https://github.com/gharams19" target = "blank">
              <FontAwesomeIcon  id = "mediaLink" icon = {faGithub} /></a>
              <a href = "https://www.linkedin.com/in/gharam-alsaedi-1b3075197/" target = "blank">
                <FontAwesomeIcon  id = "mediaLink" icon = {faLinkedin} /></a>
            </div>
           


           <p> Designed & Programmed by Gharam Alsaedi</p>
           </footer>
          </section>
         

    </div>
  );
}

export default App;
