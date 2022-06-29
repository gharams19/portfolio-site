import React from "react";
import "./App.css";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faTimes,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import background from "../src/background2.gif";
import picture from "../src/picture.jpg";
import html1 from "../src/ResturantTinder.png";
import html2 from "../src/DailyPostcard.png";
import unity1 from "../src/TacoMan.png";
import python1 from "../src/AI3.jpeg";
import ios1 from "../src/PopMatch.png"
import other1 from "../src/tdm.png";

class App extends Component {
  componentDidMount() {
    function elementInViewport(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;
      while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }

      
      return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
      );
    }
    function checkAnimations(element, animationName) {
        if (elementInViewport(element)) {
          element.classList.add(animationName);
        } else if (element.classList.contains(animationName)) {
          return;
        } else {
          element.classList.remove(animationName);
        }
      
      
    }
    window.onscroll = function () {
      Scrolled();
    };
    var nav = document.getElementById("nav");
    var sticky = nav.offsetTop;
    var elements1 = document.getElementsByClassName("animation_slide_left");
    var elements2 = document.getElementsByClassName("animation_scale");
    var elements3 = document.getElementsByClassName("Projects");

    function Scrolled() {
      if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
        for (var i = 0; i < elements1.length; i++) {
        checkAnimations(elements1[i], "slide-in-left");
      }
      for (i = 0; i < elements2.length; i++) {
        checkAnimations(elements2[i], "scale-in-center");
      }
      for (i = 0; i < elements3.length; i++) {
        var animationName = "slide-in-bottom" + i;
        checkAnimations(elements3[i], animationName);
      }
    }
    var btnContainer = document.getElementById("filtersContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    window.onload = () => {
      filterSelection("all");
    };
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("Projects");
      var gallery = document.getElementById("gallery");
      if (c === "all") {
        c = "";
        gallery.style.justifyContent = "initial";
        if(window.screen.width > 600) {
          gallery.style.margin = "0px 0px 0px 300px";

        } 
      } else {
        gallery.style.justifyContent = "center";
        gallery.style.margin = "0px 0px 0px 0px";
      }
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }

    function close(project) {
      var overlay = document.getElementsByClassName("overlay_content");
      overlay[project].style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
    function on(project) {
      var overlay = document.getElementsByClassName("overlay_content");
      overlay[project].style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }

    return (
      <div className="App">
        <section id="page1">
          <p id="page1_text">
            Hello, I'm <span style={{ color: "#ff1a8c" }}>Gharam Alsaedi</span>
            <div>I'm a developer.</div>
            <a href="#page2" id="buttonTo2nd">
              View work
            </a>
          </p>
          <img className="first_img" src={background} alt=""></img>
        </section>
        <nav id="nav" className="nav">
          <a href="#page1" style = {{backgroundColor: "#200057"}}>Home</a>
          <a href="#page2">About</a>
          <a href="#page3">Projects</a>
          <a href="#page4">Contact</a>
        </nav
        >
        <section id="page2">
          <div id="title" className="animation_slide_left">
            [ About ]
          </div>
          <div id="page2_content">
            <div id="personal_pic" className="animation_scale">
              <img id="picture" src={picture} alt="<>"></img>
            </div>
            <p id="page2_text" className="animation_slide_left">
            I'm currently a Software Engineer at {" "}
                <a href = "https://www.activisionblizzardmedia.com/" target = "blank">
                  Activision Blizzard Media.
                </a>    
              <div>
                I mostly enjoy crafting an idea into a video game, and building
                innovative websites. 
              </div>
              <div>
                I also like exploring different branches in Software Engineering including mobile development. 
              </div>
            </p>
          </div>
          <p  className="animation_slide_left" id = "skillsTitle"
           
          >
            Here are a few technologies I have been working with:
          </p>
          <div id="skills" className="animation_slide_left">
            <div id="skills_container">
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                C/C++{" "}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                C#{" "}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                Unity{" "}
              </p>
            </div>
            
            <div id="skills_container">
              {" "}
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                JavaScript
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                Python{" "}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                SQL{" "}
              </p>
            </div>
            <div id="skills_container">
              {" "}
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                Swift
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                Cocoapods{" "}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "#cb0065" }}
                />{" "}
                Firebase{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="page3">
          <div id="overlay">
            <div id="overlay_container">
              <div className="overlay_content 0">
                <div id="closeOverlay" onClick={() => close("0")}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <p style={{ color: "#cb0065", fontSize: "30px" }}>
                  Resturant Tinder Web Application
                </p>
                <p>
                  Resturant Tinder is an application that helps decide on a
                  resturant for a group based on a voting system.
                </p>
                <a
                  href="https://github.com/gharams19/Resturant-Tinder"
                  target="blank"
                >
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "40px", marginTop: "60px" }}
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://solar-rectangular-fan.glitch.me/"
                  target="blank"
                >
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "35px", marginTop: "60px" }}
                    icon={faExternalLinkAlt}
                  />
                </a>
              </div>
              <div className="overlay_content 1">
                <div id="closeOverlay" onClick={() => close("1")}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <p style={{ color: "#cb0065", fontSize: "30px" }}>
                  Daily Postcard Web Application
                </p>
                <p>
                  With Daily Postcard, a user can create a fully customizable
                  virtual postcard to send to family and friends.
                </p>
                <a
                  href="https://github.com/gharams19/Daily-Postcard"
                  target="blank"
                >
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "40px", marginTop: "60px" }}
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://alike-grand-microwave.glitch.me/"
                  target="blank"
                >
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "35px", marginTop: "60px" }}
                    icon={faExternalLinkAlt}
                  />
                </a>
              </div>
              <div className="overlay_content 2">
                <div id="closeOverlay" onClick={() => close("2")}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <p style={{ color: "#cb0065", fontSize: "30px" }}>
                  Taco Man Game
                </p>
                <p>
                  Taco Man is a 2D platform game created with Unity where you go
                  on an adventure to eat every taco there is.
                </p>
                <a href="https://g19.itch.io/taco-man-2" target="blank">
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "35px", marginTop: "60px" }}
                    icon={faExternalLinkAlt}
                  />
                </a>
              </div>
              <div className="overlay_content 3">
                <div id="closeOverlay" onClick={() => close("3")}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <p style={{ color: "#cb0065", fontSize: "30px" }}>
                  The Dream Machine Game
                </p>
                <p>
                  The Dream Machine is an interactive science fiction game where
                  you test out a machine that transfers you to a world of
                  dreams.
                </p>
                <a
                  href="https://g19.itch.io/the-dream-machine-2"
                  target="blank"
                >
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "35px", marginTop: "60px" }}
                    icon={faExternalLinkAlt}
                  />
                </a>
              </div>
              <div className="overlay_content 4">
                <div id="closeOverlay" onClick={() => close("4")}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <p style={{ color: "#cb0065", fontSize: "30px" }}>
                  Oska Player Program
                </p>
                <p>
                  Oska Player is an AI that generates the best moves depending
                  on the board its given.
                </p>
                <a
                  href="https://github.com/gharams19/Oska-Player"
                  target="blank"
                >
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "40px", marginTop: "60px" }}
                    icon={faGithub}
                  />
                </a>
              </div>
              <div className="overlay_content 5">
                <div id="closeOverlay" onClick={() => close("5")}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <p style={{ color: "#cb0065", fontSize: "30px" }}>
                  PopMatch
                </p>
                <p>
                  PopMatch is a video chatting app that allows users to have 1 on 1 meetings with new people and like minded thinkers. It's a way to create
                  social bonds and network for university students. <br></br><br></br>PopMatch aims to mitigate 
                  the lack of social interaction as a result of the pandemic and having everything go virtual. 
      
                </p>
                <a
                  href="https://github.com/gharams19/PopMatch"
                  target="blank"
                >
                  <FontAwesomeIcon
                    id="mediaLink"
                    style={{ fontSize: "40px", marginTop: "60px" }}
                    icon={faGithub}
                  />
                </a>
              </div>
            </div>
          </div>

          <div id="title" className="animation_slide_left">
            [Projects]
          </div>
          <div id="filtersContainer">
            <button
              className="btn active"
              onClick={() => filterSelection("all")}
            >
              All
            </button>
            <button className="btn" onClick={() => filterSelection("Html")}>
              Web Applications
            </button>
            <button className="btn" onClick={() => filterSelection("Unity")}>
              Games
            </button>
            <button className="btn" onClick={() => filterSelection("Python")}>
              AI Programs
            </button>
            <button className="btn" onClick={() => filterSelection("Other")}>
              IOS Applications
            </button>
          </div>

          <div className="gallery" id="gallery">
            <div className="Projects Html">
              <img
                id="ProjectImg"
                className="ProjectImg"
                src={html1}
                alt=""
                style={{ width: "100%" }}
              ></img>
              <div className="middle">
                <p id="ProjectsTitle">Resturant Tinder</p>
                <p id="ProjectsSubtitle">JavaScript/Node Js</p>
                <btn id="descriptionBtn" onClick={() => on("0")}>
                  Learn more
                </btn>
              </div>
            </div>
            <div className="Projects Html">
              <img
                id="ProjectImg"
                className="ProjectImg"
                src={html2}
                alt=""
                style={{ width: "100%" }}
              ></img>
              <div className="middle">
                <p id="ProjectsTitle">Daily Postcard</p>
                <p id="ProjectsSubtitle">JavaScript/Node Js</p>
                <btn id="descriptionBtn" onClick={() => on("1")}>
                  Learn more
                </btn>
              </div>
            </div>
            <div className="Projects Unity">
              <img
                id="ProjectImg"
                className="ProjectImg"
                src={unity1}
                alt=""
                style={{ width: "100%" }}
              ></img>
              <div className="middle">
                <p id="ProjectsTitle">Taco Man</p>
                <p id="ProjectsSubtitle">Unity/C#</p>
                <btn id="descriptionBtn" onClick={() => on("2")}>
                  Learn more
                </btn>
              </div>
            </div>
            <div className="Projects Unity">
              <img
                id="ProjectImg"
                className="ProjectImg"
                src={other1}
                alt=""
                style={{ width: "100%" }}
              ></img>
              <div className="middle">
                <p id="ProjectsTitle">The Dream Machine</p>
                <p id="ProjectsSubtitle">Html/JavaScript</p>
                <btn id="descriptionBtn" onClick={() => on("3")}>
                  Learn more
                </btn>
              </div>
            </div>
            <div className="Projects Python">
              <img
                id="ProjectImg"
                className="ProjectImg"
                src={python1}
                alt=""
                style={{ width: "100%" }}
              ></img>
              <div className="middle">
                <p id="ProjectsTitle">Oska Player AI</p>
                <p id="ProjectsSubtitle">Python</p>
                <btn id="descriptionBtn" onClick={() => on("4")}>
                  Learn more
                </btn>
              </div>
            </div>
            <div className="Projects Others">
              <img
                id="ProjectImg"
                className="ProjectImg"
                src={ios1}
                alt=""
                style={{ width: "100%" }}
              ></img>
              <div className="middle">
                <p id="ProjectsTitle">PopMatch</p>
                <p id="ProjectsSubtitle">IOS/Swift</p>
                <btn id="descriptionBtn" onClick={() => on("5")}>
                  Learn more
                </btn>
              </div>
            </div>
          </div>
        </section>

        <section id="page4">
          <div id="title" className="animation_slide_left">
            [Contact]
          </div>
          <div id="page4_sub" className="animation_slide_left">
            Lets get in touch
          </div>
          <div id="email" className="animation_scale">
            {" "}
            <a id="emailBtn" href="mailto:gharamj19@gmail.com">
              Say Hello
            </a>
          </div>
          <footer>
            <div id="mediaLinks">
              <a href="https://github.com/gharams19" target="blank">
                <FontAwesomeIcon id="mediaLink" icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/gharam-alsaedi-1b3075197/"
                target="blank"
              >
                <FontAwesomeIcon id="mediaLink" icon={faLinkedin} />
              </a>
            </div>

            <p> Designed & Programmed by Gharam Alsaedi</p>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
