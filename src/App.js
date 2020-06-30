import React from "react";
import "./App.css";
import background from "../src/background2.gif";
import picture from "../src/picture.jpg";

var loaded = 0;
function App() {
  function move() {
    if(loaded === 0) {
      for(var i = 0; i < 7; i++) {
        var str = "skill" + i.toString();
      }
        var elem = document.getElementById("skill");   
        var width = 20;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
          }
        }
        loaded = 1;
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
      <section id="page2" onMouseOver={move}>
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
        <div className= "SkillBars">
          <div  id = "skill1">
            HTML & CSS
          </div>
          <div id = "skill2">
            JavaScript
          </div>
          <div id = "skill3">
            SQL
          </div>
          <div id = "skill4">
            Unity
          </div>
          <div id = "skill5">
            C#
          </div>
          <div id = "skill6">
            Python
          </div>
        </div>
        
      </section>
      <section id="page3">page 3</section>
      <section id="page4">page 4</section>
    </div>
  );
}

export default App;
